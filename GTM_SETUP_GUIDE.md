# Google Tag Manager (GTM) Configuration Guide

This guide provides step-by-step instructions on how to configure your DataLayer events in Google Tag Manager now that the codebase uses `dataLayer.push()`.

## 1. Create a Generic Event Tag
Instead of creating dozens of tags, you can create a single, clean generic GA4 Event tag.

1. Go to **Tags** > **New**.
2. Name it: `GA4 - Generic Event`.
3. Tag Configuration: Select **Google Analytics: GA4 Event**.
4. Measurement ID: Enter your GA4 Measurement ID (`G-XXXXXXXXXX`).
5. **Event Name**: Click the `+` icon and select/create a new **Data Layer Variable** named `DLV - Event Name` pointing to the variable name `event`.

## 2. Configure Event Parameters
In the same Tag configuration, under **Event Parameters**, map the following parameters from the data layer:

| Parameter Name | Value (Data Layer Variables) |
|---|---|
| `event_category` | `{{DLV - event_category}}` (Variable Name: `event_category`) |
| `event_label` | `{{DLV - event_label}}` (Variable Name: `event_label`) |
| `value` | `{{DLV - value}}` (Variable Name: `value`) |
| `page_path` | `{{DLV - page_path}}` (Variable Name: `page_path`) |
| `page_title` | `{{DLV - page_title}}` (Variable Name: `page_title`) |
| `section_name` | `{{DLV - section_name}}` (Variable Name: `section_name`) |

*(You will need to create a new "Data Layer Variable" for each of the variable names listed in the right column above if you haven't already).*

## 3. Create Custom Event Triggers
Now, create a custom event trigger to fire the tag.

1. Go to **Triggers** > **New**.
2. Name it: `Custom Event - All Tracking Events`.
3. Trigger Configuration: Select **Custom Event**.
4. Event Name: Check "Use regex matching".
5. Enter the following regex to match all our custom events:
   `^(scroll_depth|time_on_page|whatsapp_click|phone_call_click|button_click|outbound_link_click|direction_click|social_click|email_click|section_view|page_view)$`
6. This trigger fires on: **All Custom Events**.

## 4. Attach Trigger to Tag
1. Go back to your `GA4 - Generic Event` Tag.
2. Under **Triggering**, select the `Custom Event - All Tracking Events` trigger you just created.
3. Save the tag.

## 5. Testing
1. Click **Preview** in GTM to launch Tag Assistant.
2. Enter your website URL.
3. Perform the actions (scroll, click WhatsApp, navigate to Collections, etc.).
4. Verify that the `GA4 - Generic Event` tag fires on these actions and the correct `event_category` and `event_label` parameters are passed to Google Analytics!
5. Once verified, click **Submit** to publish your GTM workspace.
