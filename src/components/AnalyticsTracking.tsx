import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const AnalyticsTracking = () => {
  useEffect(() => {
    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent > maxScroll && [25, 50, 75, 90].includes(scrollPercent)) {
        maxScroll = scrollPercent;
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: `${scrollPercent}%`,
            value: scrollPercent
          });
        }
      }
    };

    // Track time on page (send event every 30 seconds)
    let timeOnPage = 0;
    const timeInterval = setInterval(() => {
      timeOnPage += 30;
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: `${timeOnPage} seconds`,
          value: timeOnPage
        });
      }
    }, 30000);

    // Add scroll event listener
    window.addEventListener('scroll', trackScrollDepth, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      clearInterval(timeInterval);
    };
  }, []);

  return null;
};

export default AnalyticsTracking;
