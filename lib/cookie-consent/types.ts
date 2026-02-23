export enum CookieConsentCategory {
  Necessary = "necessary",
  Preferences = "preferences",
  Analytics = "analytics",
  Marketing = "marketing",
}

export type CookieConsentPreferencesType = Record<CookieConsentCategory, boolean>;

export type CookieConsentStateType = {
  version: number;
  updatedAt: string;
  preferences: CookieConsentPreferencesType;
};
