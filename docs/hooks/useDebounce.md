---
id: usedebounce
title: useDebounce Hook
sidebar_position: 1
---

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
import { useState } from "react";
import { useDebounce } from "react-native-enhancer";

const MyComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
