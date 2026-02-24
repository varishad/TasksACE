'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId: string
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Configure gtag
    if (typeof window !== 'undefined' && window.gtag && typeof document !== 'undefined') {
      window.gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [gaId])

  return (
    <>
      <Script
        id="google-analytics-consent"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Default consent to 'denied' as per GDPR/Consent Mode v2
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
            
            gtag('js', new Date());
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', '${gaId}', {
              page_title: typeof document !== 'undefined' ? document.title : '',
              page_location: typeof window !== 'undefined' ? window.location.href : '',
            });
          `,
        }}
      />
    </>
  )
}

// Global utility to update consent
export const updateGDPRConsent = (consented: boolean) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const status = consented ? 'granted' : 'denied';
    window.gtag('consent', 'update', {
      'ad_storage': status,
      'ad_user_data': status,
      'ad_personalization': status,
      'analytics_storage': status
    });

    // Set a flag for local state if needed
    localStorage.setItem('cookie-consent', consented ? 'accepted' : 'declined');
  }
};

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
