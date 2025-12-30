# Analytics Tracking Implementation

## Google Analytics 4 (GA4) Event Tracking

This website implements comprehensive conversion tracking using Google Analytics 4 (GA4).

### Tracked Events

#### 1. **WhatsApp Button Clicks** 🟢
Tracks all WhatsApp button interactions across the site:
- **Event Name**: `whatsapp_click`
- **Event Category**: `engagement`
- **Tracked Locations**:
  - Hero Section - Main CTA
  - Navbar - Desktop
  - Navbar - Mobile
  - Location Section
  - Collections Cards (per collection type)
  - Collections - CTA Section
  - Contact Page - CTA

**GA4 Path**: Events → whatsapp_click
**Label Format**: Location identifier (e.g., "Hero Section - Main CTA", "Collections - Bridal Sarees")

#### 2. **Phone Call Clicks** 📞
Tracks all phone number click interactions:
- **Event Name**: `phone_call_click`
- **Event Category**: `engagement`
- **Tracked Locations**:
  - Navbar - Desktop
  - Navbar - Mobile
  - Location Section
  - Contact Page
  - Footer

**GA4 Path**: Events → phone_call_click

#### 3. **Get Directions Clicks** 🗺️
Tracks clicks on Google Maps directions:
- **Event Name**: `directions_click`
- **Event Category**: `engagement`
- **Tracked Locations**:
  - Location Section
  - Contact Page - CTA

**GA4 Path**: Events → directions_click

#### 4. **Scroll Depth Tracking** 📊
Automatically tracks how far users scroll on pages:
- **Event Name**: `scroll_depth`
- **Event Category**: `engagement`
- **Tracked Milestones**: 25%, 50%, 75%, 90%

**GA4 Path**: Events → scroll_depth

#### 5. **Time on Page** ⏱️
Tracks user engagement duration:
- **Event Name**: `time_on_page`
- **Event Category**: `engagement`
- **Interval**: Every 30 seconds
- **Label Format**: "{seconds} seconds"

**GA4 Path**: Events → time_on_page

---

## Viewing Analytics in GA4

### 1. Real-Time Events
Go to: **Reports → Realtime → Event count by Event name**

You'll see live events as users interact with your site.

### 2. Event Reports
Go to: **Reports → Engagement → Events**

View all tracked events with counts, users, and conversions.

### 3. Create Custom Reports

#### WhatsApp Conversion Report
1. Go to **Explore** → Create a new exploration
2. Add dimension: `Event name`
3. Add filter: `Event name` exactly matches `whatsapp_click`
4. Add metric: `Event count`, `Total users`
5. Add secondary dimension: `Event label` (to see which buttons perform best)

#### Phone Call Funnel
1. Go to **Explore** → Create funnel exploration
2. Step 1: Page view
3. Step 2: `phone_call_click` event
4. View conversion rates

---

## Setting Up Conversions

To mark these events as conversions in GA4:

1. Go to **Admin → Data display → Events**
2. Find the event (e.g., `whatsapp_click`)
3. Toggle "Mark as conversion"
4. Repeat for `phone_call_click` and `directions_click`

---

## Event Structure

All events follow this structure:

```javascript
window.gtag('event', 'event_name', {
  event_category: 'engagement',
  event_label: 'Specific Location',
  value: 1
});
```

---

## Files Modified

### Analytics Components
- `src/components/AnalyticsTracking.tsx` - Scroll & time tracking
- `src/vite-env.d.ts` - TypeScript declarations

### Conversion Tracking Added To
- `src/components/Hero.tsx`
- `src/components/Navbar.tsx`
- `src/components/LocationSection.tsx`
- `src/components/Footer.tsx`
- `src/pages/Collections.tsx`
- `src/pages/Contact.tsx`
- `src/App.tsx` - Analytics initialization

---

## Testing Events

### Browser Console Testing
Open browser console and run:

```javascript
// Test WhatsApp click
window.gtag('event', 'whatsapp_click', {
  event_category: 'engagement',
  event_label: 'Test',
  value: 1
});
```

### Verify in GA4
1. Go to GA4 → **Realtime**
2. Click on a WhatsApp button on your site
3. Event should appear within 5-10 seconds

---

## Best Practices

1. **Unique Labels**: Each button has a unique label to identify which CTA performs best
2. **Consistent Naming**: All events follow a consistent naming convention
3. **Value Tracking**: Each event has a value of 1 for easy counting
4. **Non-Blocking**: All tracking is non-blocking and won't slow down user interactions

---

## Optimization Tips

Based on GA4 data, you can:

1. **A/B Test CTAs**: Compare different button placements
2. **Optimize High-Performers**: Double down on high-converting locations
3. **Remove Low-Performers**: Remove or redesign low-converting elements
4. **User Journey**: Track path to conversion (which pages lead to WhatsApp clicks)
5. **Mobile vs Desktop**: Compare conversion rates across devices

---

## Questions to Answer with This Data

- Which page drives the most WhatsApp inquiries?
- Do users prefer calling or WhatsApp?
- How many users request directions before visiting?
- What scroll depth correlates with conversions?
- What's the average time before a user takes action?

---

## Support

For GA4 issues:
- [GA4 Documentation](https://support.google.com/analytics/answer/9267735)
- [GA4 Event Tracking Guide](https://support.google.com/analytics/answer/9322688)
