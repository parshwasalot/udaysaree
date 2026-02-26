import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

const AnalyticsTracking = () => {
  const location = useLocation();

  /*useEffect(() => {
    // Track Page View
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname,
        page_title: document.title || location.pathname,
      });
    }
  }, [location]);*/

  useEffect(() => {
    // Track Section View (Intersection Observer)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section-name');
            if (sectionName && typeof window !== 'undefined') {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'section_view',
                section_name: sectionName,
                page_path: window.location.pathname
              });
              // Unobserve after tracking it once per load
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.5 } // Track when at least 50% is visible
    );

    // Find all sections that have the data attribute and observe them
    const sections = document.querySelectorAll('[data-section-name]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location]); // Re-run when navigation happens

  useEffect(() => {
    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

      if (scrollPercent > maxScroll && [25, 50, 75, 90].includes(scrollPercent)) {
        maxScroll = scrollPercent;
        if (typeof window !== 'undefined') {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'scroll_depth',
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
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'time_on_page',
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
