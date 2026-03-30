export const CONSENT_STORAGE_KEY = "site-consent.v1";

export type ConsentCategories = {
  analytics: boolean;
};

export type StoredConsentV1 = {
  version: 1;
  decidedAt: string;
  categories: ConsentCategories;
};

function isStoredConsentV1(value: unknown): value is StoredConsentV1 {
  if (typeof value !== "object" || value === null) return false;
  const o = value as Record<string, unknown>;
  if (o.version !== 1) return false;
  if (typeof o.decidedAt !== "string") return false;
  if (typeof o.categories !== "object" || o.categories === null) return false;
  const c = o.categories as Record<string, unknown>;
  return typeof c.analytics === "boolean";
}

export function readConsentFromStorage(): StoredConsentV1 | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isStoredConsentV1(parsed)) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsentToStorage(categories: ConsentCategories): void {
  const payload: StoredConsentV1 = {
    version: 1,
    decidedAt: new Date().toISOString(),
    categories,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
}
