"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  type ConsentCategories,
  readConsentFromStorage,
  writeConsentToStorage,
} from "@/lib/consent";

type ConsentHydrationStatus = "hydrating" | "ready";

type ConsentContextValue = {
  hydrationStatus: ConsentHydrationStatus;
  /** True once user has saved a choice (banner hidden). */
  hasStoredConsent: boolean;
  categories: ConsentCategories;
  isBannerVisible: boolean;
  isPreferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAnalytics: () => void;
  rejectNonEssential: () => void;
  savePreferences: (next: ConsentCategories) => void;
};

const defaultCategories: ConsentCategories = { analytics: false };

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [hydrationStatus, setHydrationStatus] =
    useState<ConsentHydrationStatus>("hydrating");
  const [hasStoredConsent, setHasStoredConsent] = useState(false);
  const [categories, setCategories] =
    useState<ConsentCategories>(defaultCategories);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = readConsentFromStorage();
    if (stored) {
      setHasStoredConsent(true);
      setCategories(stored.categories);
      setIsBannerVisible(false);
    } else {
      setHasStoredConsent(false);
      setCategories(defaultCategories);
      setIsBannerVisible(true);
    }
    setHydrationStatus("ready");
  }, []);

  const persist = useCallback((next: ConsentCategories) => {
    writeConsentToStorage(next);
    setCategories(next);
    setHasStoredConsent(true);
    setIsBannerVisible(false);
    setIsPreferencesOpen(false);
  }, []);

  const acceptAnalytics = useCallback(() => {
    persist({ analytics: true });
  }, [persist]);

  const rejectNonEssential = useCallback(() => {
    persist({ analytics: false });
  }, [persist]);

  const savePreferences = useCallback(
    (next: ConsentCategories) => {
      persist(next);
    },
    [persist],
  );

  const openPreferences = useCallback(() => {
    setIsPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false);
  }, []);

  const value = useMemo(
    (): ConsentContextValue => ({
      hydrationStatus,
      hasStoredConsent,
      categories,
      isBannerVisible,
      isPreferencesOpen,
      openPreferences,
      closePreferences,
      acceptAnalytics,
      rejectNonEssential,
      savePreferences,
    }),
    [
      hydrationStatus,
      hasStoredConsent,
      categories,
      isBannerVisible,
      isPreferencesOpen,
      openPreferences,
      closePreferences,
      acceptAnalytics,
      rejectNonEssential,
      savePreferences,
    ],
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}
