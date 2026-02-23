import {
  CookieConsentCategory,
  type CookieConsentPreferencesType,
  type CookieConsentStateType,
} from "./types";

export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_KEY = "aristobyte_cookie_consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

export const DEFAULT_COOKIE_PREFERENCES: CookieConsentPreferencesType = {
  [CookieConsentCategory.Necessary]: true,
  [CookieConsentCategory.Preferences]: false,
  [CookieConsentCategory.Analytics]: false,
  [CookieConsentCategory.Marketing]: false,
};

const isValidPreferences = (value: unknown): value is CookieConsentPreferencesType => {
  if (!value || typeof value !== "object") return false;
  const prefs = value as Record<string, unknown>;
  return (
    typeof prefs[CookieConsentCategory.Necessary] === "boolean" &&
    typeof prefs[CookieConsentCategory.Preferences] === "boolean" &&
    typeof prefs[CookieConsentCategory.Analytics] === "boolean" &&
    typeof prefs[CookieConsentCategory.Marketing] === "boolean"
  );
};

const isValidConsentState = (value: unknown): value is CookieConsentStateType => {
  if (!value || typeof value !== "object") return false;
  const state = value as Record<string, unknown>;
  return (
    typeof state.version === "number" &&
    typeof state.updatedAt === "string" &&
    isValidPreferences(state.preferences)
  );
};

export const buildConsentState = (
  preferences: Partial<CookieConsentPreferencesType>,
): CookieConsentStateType => ({
  version: COOKIE_CONSENT_VERSION,
  updatedAt: new Date().toISOString(),
  preferences: {
    ...DEFAULT_COOKIE_PREFERENCES,
    ...preferences,
    [CookieConsentCategory.Necessary]: true,
  },
});

const parseConsentState = (rawValue: string | null): CookieConsentStateType | null => {
  if (!rawValue) return null;
  try {
    const parsed = JSON.parse(rawValue) as unknown;
    if (!isValidConsentState(parsed)) return null;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
};

const readCookieValue = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const cookie = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${name}=`));
  if (!cookie) return null;
  const value = cookie.slice(name.length + 1);
  return decodeURIComponent(value);
};

export const readCookieConsentState = (): CookieConsentStateType | null => {
  if (typeof window === "undefined") return null;

  const fromCookie = parseConsentState(readCookieValue(COOKIE_CONSENT_KEY));
  if (fromCookie) return fromCookie;

  const fromStorage = parseConsentState(window.localStorage.getItem(COOKIE_CONSENT_KEY));
  if (fromStorage) return fromStorage;

  return null;
};

export const writeCookieConsentState = (state: CookieConsentStateType) => {
  if (typeof window === "undefined") return;
  const serialized = JSON.stringify(state);
  const encoded = encodeURIComponent(serialized);
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${COOKIE_CONSENT_KEY}=${encoded}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax${secure}`;
  window.localStorage.setItem(COOKIE_CONSENT_KEY, serialized);
};
