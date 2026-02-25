# DataLayer Event Schema

This document outlines the event schema for Google Tag Manager `dataLayer.push()` implementation for the Uday Saree website. The schema is segmented by global tracking events and specific page interactions.

---

## 1. Global Tracking (All Pages)

### 1.1 Page View
- **User Action**: User navigates to a new page or route.
- **Event Name**: `page_view`
- **Event Params**:
  - `page_path`: Path of the page (e.g., `'/'`, `'/collections'`, `'/contact'`)
  - `page_title`: Title of the page

**DataLayer Example:**
```javascript
window.dataLayer.push({
  event: 'page_view',
  page_path: '/collections',
  page_title: 'Saree Collections in Bhavnagar'
});
```

### 1.2 Section View
- **User Action**: Customer scrolls down and a major section comes into the viewport (using Intersection Observer).
- **Event Name**: `section_view`
- **Event Params**:
  - `section_name`: Name of the section (e.g., `'Hero'`, `'About Us'`, `'Collections'`, `'Testimonials'`, `'Location'`)
  - `page_path`: Current page path

**DataLayer Example:**
```javascript
window.dataLayer.push({
  event: 'section_view',
  section_name: 'Testimonials',
  page_path: '/'
});
```

### 1.3 Scroll Depth Tracking
- **User Action**: User scrolls to specific milestones (25%, 50%, 75%, 90%).
- **Event Name**: `scroll_depth`
- **Event Params**:
  - `event_category`: `'engagement'`
  - `event_label`: `'{scrollPercent}%'`
  - `value`: `{scrollPercent}`

### 1.4 Time on Page Tracking
- **User Action**: Fired periodically as long as user is active (e.g., every 30 seconds).
- **Event Name**: `time_on_page`
- **Event Params**:
  - `event_category`: `'engagement'`
  - `event_label`: `'{timeOnPage} seconds'`
  - `value`: `{timeOnPage}`

### 1.5 Header / Navbar (Global)
- **WhatsApp Click**: `whatsapp_click` | `event_label`: `'Navbar - Desktop'` or `'Navbar - Mobile'`
- **Call Now Click**: `phone_call_click` | `event_label`: `'Navbar - Desktop'` or `'Navbar - Mobile'`

### 1.6 Footer (Global)
- **Instagram Icon**: `social_click` | `event_label`: `'Footer - Instagram'`
- **Facebook Icon**: `social_click` | `event_label`: `'Footer - Facebook'`
- **Phone Number**: `phone_call_click` | `event_label`: `'Footer'`
- **Chat on WhatsApp**: `whatsapp_click` | `event_label`: `'Footer - Chat'`

---

## 2. Home Page (`/`)

### 2.1 Hero Section
- **Chat on WhatsApp**: `whatsapp_click` | `event_label`: `'Hero Section - Main CTA'`
- **Visit Our Showroom**: `button_click` | `event_label`: `'Hero - Visit Showroom'`

### 2.2 Collections Section
- **Enquire on WhatsApp (Card)**: `whatsapp_click` | `event_label`: `'Collections Section - Bridal Sarees'` (dynamic based on card title)
- **View All Collections**: `button_click` | `event_label`: `'Collections Section - View All'`

### 2.3 Testimonials Section
- **View all reviews on Google**: `outbound_link_click` | `event_label`: `'Testimonials - Google Reviews'`

### 2.4 Visit Us / Location Section
- **Get Directions**: `direction_click` | `event_label`: `'Location Section - Get Directions'`
- **Chat on WhatsApp**: `whatsapp_click` | `event_label`: `'Location Section - Chat'`
- **Phone Number Click**: `phone_call_click` | `event_label`: `'Location Section'`

---

## 3. Collections Page (`/collections`)

### 3.1 Collections Grid
- **Enquire on WhatsApp (Card)**: `whatsapp_click` | `event_label`: `'Collections Page - Bridal Sarees'` (dynamic based on card title)

### 3.2 CTA Section (Bottom)
- **Chat on WhatsApp**: `whatsapp_click` | `event_label`: `'Collections Page - CTA Section'`
- **Visit Our Showroom**: `button_click` | `event_label`: `'Collections Page - Visit Showroom'`

---

## 4. Contact Page (`/contact`)

### 4.1 Contact Information Cards
- **Phone Number Clicks**: `phone_call_click` | `event_label`: `'Contact Page'`
- **Email Click**: `email_click` | `event_label`: `'Contact Page - Email'`

### 4.2 Main CTA Buttons
- **Chat on WhatsApp**: `whatsapp_click` | `event_label`: `'Contact Page - Main CTA'`
- **Get Directions**: `direction_click` | `event_label`: `'Contact Page - Get Directions'`
