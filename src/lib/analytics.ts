export type ConsentStatus = "granted" | "denied";

export interface ConsentPreferences {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  timestamp: string;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const pushToDataLayer = (data: Record<string, unknown>) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
};

export const trackCookieConsent = (
  choice: "all_accepted" | "all_rejected" | "custom",
  preferences: ConsentPreferences
) => {
  const analyticsStatus: ConsentStatus = preferences.analytics ? "granted" : "denied";
  const marketingStatus: ConsentStatus = preferences.marketing ? "granted" : "denied";

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: analyticsStatus,
      ad_storage: marketingStatus,
      ad_user_data: marketingStatus,
      ad_personalization: marketingStatus,
    });
  }

  pushToDataLayer({
    event: "cookie_consent",
    consent_choice: choice,
    analytics_storage: analyticsStatus,
    ad_storage: marketingStatus,
    preferences,
    timestamp: new Date().toISOString(),
  });
};

export const trackLeadGenerated = (leadData: {
  lead_type: string;
  grade_interest: string;
  source: string;
}) => {
  pushToDataLayer({
    event: "generate_lead",
    lead_type: leadData.lead_type,
    grade_interest: leadData.grade_interest,
    source: leadData.source,
    value: 1,
    currency: "MXN",
    timestamp: new Date().toISOString(),
  });
};
