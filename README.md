# react-native-enhancer

[![npm](https://img.shields.io/npm/v/react-native-enhancer)](https://www.npmjs.com/package/react-native-enhancer)
[![GitHub license](https://img.shields.io/github/license/yourusername/react-native-enhancer)](https://github.com/sehgalrishabh/react-native-enhancer/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/sehgalrishabh/react-native-enhancer)](https://github.com/yourusername/react-native-enhancer/issues)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue.svg)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-61DAFB.svg)](https://reactjs.org/)
[![React Native](https://img.shields.io/badge/React_Native-61DAFB.svg)](https://reactnative.dev/)

A comprehensive utility library for ReactNative development, providing essential helper methods and tools in one cohesive package.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [useDebounce Hook](#usedebounce-hook)
  - [useTimer Hook](#usetimer-hook)
- [Contributing](#contributing)
- [License](#license)

## Installation

```sh
npm install react-native-enhancer
```

or

```sh
yarn add react-native-enhancer
```

## Usage

### `useDebounce` Hook

The `useDebounce` hook allows you to debounce a callback function, which is useful for scenarios like search input fields where you want to delay/limit the execution of a function.

#### Use Cases:

- **Live Search:** Enhance user experience by implementing search functionality with live filtering of results. Debouncing user input ensures that search queries are executed efficiently, providing real-time feedback without overwhelming the application with unnecessary requests.

- **Input Validation:** Ensure data integrity and prevent spamming in forms by implementing input validation with a debounce delay. This allows for seamless user interaction while validating input fields, improving usability and minimizing errors.

- **Limiting API Calls:** Optimize application performance by delaying API calls triggered by user input. Debouncing API requests prevents excessive requests to the server, reducing network traffic and improving overall responsiveness.

- **Single Operation:** Streamline user interactions by ensuring that actions are performed only once, even when triggered multiple times in rapid succession. Whether it's handling button clicks or other user-initiated events, debouncing guarantees that operations are executed efficiently and reliably, enhancing the user experience.

#### Example

```tsx
import { useState } from 'react';
import { useDebounce } from 'react-native-enhancer';

const MyComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce search function
  const debouncedSearch = useDebounce((value: string) => {
    // Your search logic here
    console.log(value);
  }, 500);

  const handleChange = (text: string) => {
    setSearchTerm(text);
    debouncedSearch(text);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default MyComponent;
```

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
import { useTimer } from 'react-native-enhancer';

const MyComponent = () => {
  // Refresh authentication token every 10 minutes (600,000 milliseconds)
  useTimer(() => {
    // Your logic to refresh authentication token here
    console.log('Refreshing authentication token...');
  }, 600000);

  return (
    <div>
      <p>Authenticated user content...</p>
    </div>
  );
};

export default MyComponent;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
