# react-native-enhancer

A comprehensive utility library for ReactNative development, providing essential helper methods and tools in one cohesive package.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [useDebounce Hook](#usedebounce-hook)
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

The `useDebounce` hook allows you to debounce a callback function, which is useful for scenarios like search input fields where you want to delay the execution of a function.

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
