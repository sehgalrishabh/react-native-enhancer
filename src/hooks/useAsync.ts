import { useState, useEffect, useCallback } from 'react';

/**
 * A custom hook that resolves an asynchronous operation (Promise),
 * optionally processes the result, and manages loading and error states.
 *
 * @param promiseFn - A function that returns a Promise which resolves to type T.
 * @param dependencies - A list of dependencies to re-trigger the async operation when changed.
 * @param processData - An optional function to transform or refine the result before setting the response.
 * @returns A tuple containing [response, error, loading] where:
 *          - response: the resolved or processed data of type T or null
 *          - error: any error caught during the promise execution or null
 *          - loading: boolean flag indicating the loading state
 */
const useAsync = <T, U = T>(
  promiseFn: Promise<T>, // A function that returns a promise of type T
  transform?: (data: T) => U // Optional function to process/refine the response
): [T | U | null, Error | null, boolean] => {
  const [response, setResponse] = useState<T | U | null>(null); // State for the response
  const [error, setError] = useState<Error | null>(null); // State for errors
  const [loading, setLoading] = useState<boolean>(true); // State for loading status

  // Function to handle the promise resolution and optional processing
  const resolvePromise = useCallback(async () => {
    setLoading(true);
    try {
      const res = await promiseFn; // Await the result of the promise
      const refinedRes = transform ? transform(res) : res; // Process data if a processor is provided
      if (refinedRes instanceof Promise) {
        const resolveRefined = await refinedRes;
        setResponse(resolveRefined);
      } else {
        setResponse(refinedRes); // Set the processed or raw data to response
      }
      setError(null); // Clear any existing error
    } catch (e: any) {
      setResponse(null);
      setError(e); // Set the error if the promise fails
    } finally {
      setLoading(false); // Set loading to false after promise completes
    }
  }, [promiseFn, transform]); // Dependencies include promiseFn and processData

  useEffect(() => {
    resolvePromise(); // Trigger the async operation when dependencies change or on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [response, error, loading]; // Return the response, error, and loading states
};

export default useAsync;
