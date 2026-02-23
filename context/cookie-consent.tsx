"use client";

import * as React from "react";
import {
  CookieConsentCategory,
  DEFAULT_COOKIE_PREFERENCES,
  buildConsentState,
  readCookieConsentState,
  writeCookieConsentState,
  type CookieConsentPreferencesType,
  type CookieConsentStateType,
} from "@/lib/cookie-consent";

type CookieConsentContextType = {
  isReady: boolean;
  state: CookieConsentStateType | null;
  shouldPrompt: boolean;
  shouldLoadCategory: (category: CookieConsentCategory) => boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (preferences: Partial<CookieConsentPreferencesType>) => void;
};

const CookieConsentContext = React.createContext<CookieConsentContextType>({
  isReady: false,
  state: null,
  shouldPrompt: false,
  shouldLoadCategory: () => false,
  acceptAll: () => undefined,
  rejectNonEssential: () => undefined,
  savePreferences: () => undefined,
});

export type CookieConsentProviderPropsType = {
  children: React.ReactNode;
};

export const CookieConsentProvider = ({ children }: CookieConsentProviderPropsType) => {
  const [isReady, setIsReady] = React.useState(false);
  const [state, setState] = React.useState<CookieConsentStateType | null>(null);

  React.useEffect(() => {
    const storedState = readCookieConsentState();
    setState(storedState);
    setIsReady(true);
  }, []);

  const updateState = React.useCallback((nextState: CookieConsentStateType) => {
    setState(nextState);
    writeCookieConsentState(nextState);
  }, []);

  const acceptAll = React.useCallback(() => {
    updateState(
      buildConsentState({
        [CookieConsentCategory.Preferences]: true,
        [CookieConsentCategory.Analytics]: true,
        [CookieConsentCategory.Marketing]: true,
      }),
    );
  }, [updateState]);

  const rejectNonEssential = React.useCallback(() => {
    updateState(
      buildConsentState({
        [CookieConsentCategory.Preferences]: false,
        [CookieConsentCategory.Analytics]: false,
        [CookieConsentCategory.Marketing]: false,
      }),
    );
  }, [updateState]);

  const savePreferences = React.useCallback(
    (preferences: Partial<CookieConsentPreferencesType>) => {
      updateState(
        buildConsentState({
          ...DEFAULT_COOKIE_PREFERENCES,
          ...preferences,
        }),
      );
    },
    [updateState],
  );

  const shouldLoadCategory = React.useCallback(
    (category: CookieConsentCategory) => {
      if (category === CookieConsentCategory.Necessary) {
        return true;
      }

      return Boolean(state?.preferences[category]);
    },
    [state],
  );

  const value = React.useMemo(
    () => ({
      isReady,
      state,
      shouldPrompt: isReady && !state,
      shouldLoadCategory,
      acceptAll,
      rejectNonEssential,
      savePreferences,
    }),
    [acceptAll, isReady, rejectNonEssential, savePreferences, shouldLoadCategory, state],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
};

export const useCookieConsent = () => React.useContext(CookieConsentContext);
