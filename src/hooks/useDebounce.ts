import { useEffect, useRef } from 'react';

/**
 * Hook to debounce a callback function.
 * @param callback The function to be debounced.
 * @param delay Optional. The delay in milliseconds before the callback is executed.
 *              Defaults to 500 milliseconds if not provided.
 * @returns A debounced version of the callback function.
 *
 * @example
 * ```tsx
 * import React, { useState } from 'react';
 * import { useDebounce } from 'react-native-enhancer';
 *
 * const MyComponent = () => {
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearch = useDebounce((value: string) => {
 *   // Your search logic here
 *   console.log(value);
 * }, 500);
 *
 * const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 *   setSearchTerm(e.target.value);
 *   debouncedSearch(e.target.value);
 * };
 *
 * return (
 *   <input
 *     type="text"
 *     value={searchTerm}
 *     onChange={handleChange}
 *     placeholder="Search..."
 *   />
 *  );
 * };
 *
 * export default MyComponent;
 * ```
 */
const useDebounce = (callback: CallableFunction, delay?: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Cleanup function to clear timeout when component unmounts or when dependencies change
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  /**
   * Debounced version of the callback function.
   * @param args Arguments to be passed to the callback function.
   */
  const debouncedCallback = (...args: any[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay ?? 500); // Default delay is 500 milliseconds
  };

  return debouncedCallback;
};

export default useDebounce;

// import React, { useState } from 'react';
// import { useDebounce } from 'react-native-enhancer';

// const MyComponent = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const debouncedSearch = useDebounce((value: string) => {
//     // Your search logic here
//     console.log(value);
//   }, 500);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     debouncedSearch(e.target.value);
//   };

//   return (
//     <input
//       type="text"
//       value={searchTerm}
//       onChange={handleChange}
//       placeholder="Search..."
//     />
//   );
// };

// export default MyComponent;
