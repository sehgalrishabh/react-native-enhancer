---
id: usetimer
title: useTimer Hook
sidebar_position: 2
---

## Usage

### `useTimer` Hook

The `useTimer` hook allows you to execute a callback function at specified intervals, useful for scenarios like displaying real-time data or updating time-sensitive information.

#### Use Cases:

- **Real-Time Updates:** Keep user interfaces up-to-date with real-time data by fetching information from an API at regular intervals and updating the UI accordingly. For example, updating a live stock ticker or weather forecast every few seconds.

- **Automatic Slideshows or Carousels:** Enhance user engagement by creating an automatic slideshow or carousel. Switch between slides or images at specified intervals without user interaction, perfect for showcasing product highlights or promotional content.

- **Countdown Timer:** Build anticipation for events or promotions with a countdown timer. The UI dynamically updates to show the remaining time, creating a sense of urgency and excitement.

- **Polling for Updates:** Stay informed of new developments or changes by polling a server or database for updates. For instance, checking for new messages in a chat application every few seconds keeps users informed in real-time.

- **Auto-saving Drafts:** Improve user productivity and prevent data loss by implementing auto-saving functionality in forms or editors. Periodic saves of draft data provide a seamless user experience and peace of mind.

- **Periodic Data Sync:** Ensure data consistency and integrity in offline-first applications by synchronizing local data with a remote server at regular intervals. This ensures that users always have access to the latest information, even in offline mode.

- **Session Timeout Handling:** Enhance application security and user privacy by monitoring user activity and triggering a session timeout warning or logout process after a certain period of inactivity. This helps protect sensitive data and prevent unauthorized access.

- **Animated Effects:** Add visual interest and interactivity to user interfaces with animated effects. Create animations or transitions that occur at regular intervals to draw attention and engage users effectively.

#### Example

```tsx
import { useTimer } from "react-native-enhancer";

const MyComponent = () => {
  // Refresh authentication token every 10 minutes (600,000 milliseconds)
  useTimer(() => {
    // Your logic to refresh authentication token here
    console.log("Refreshing authentication token...");
  }, 600000);

  return (
    <div>
      <p>Authenticated user content...</p>
    </div>
  );
};

export default MyComponent;
```
