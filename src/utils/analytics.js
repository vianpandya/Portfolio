/**
 * Analytics Event Tracker Helper (GA4 + GTM)
 * 
 * Safely dispatches custom events to Google Analytics (gtag)
 * and Google Tag Manager (dataLayer).
 * 
 * @param {string} action - Event name (e.g. 'copy_email', 'download_resume', 'view_project')
 * @param {object} params - Optional parameters for the event
 */
export const trackEvent = (action, params = {}) => {
  if (typeof window !== 'undefined') {
    // Direct GA4 gtag event
    if (typeof window.gtag === 'function') {
      window.gtag('event', action, params);
    }
    // Google Tag Manager dataLayer push
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: action,
        ...params
      });
    }
  }
};

