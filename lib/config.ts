// Configuration for analytics and external services
export const config = {
  // Google Analytics 4 - Replace with your actual GA4 Measurement ID
  // Format: G-XXXXXXXXXX
  googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
  
  // Google Search Console - Replace with your actual verification code
  googleSearchConsoleVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'your-verification-code-here',
  
  // Site information
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tasksace.com',
  siteName: 'TasksACE',
}

// Analytics events for tracking
export const analyticsEvents = {
  // Contact form submissions
  contactFormSubmit: 'contact_form_submit',
  
  // Service inquiries
  serviceInquiry: 'service_inquiry',
  
  // WhatsApp clicks
  whatsappClick: 'whatsapp_click',
  
  // Page views
  pageView: 'page_view',
  
  // Downloads
  downloadFile: 'file_download',
  
  // Engagement
  emailClick: 'email_click',
  phoneClick: 'phone_click',
}

// Helper function to track events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
} 