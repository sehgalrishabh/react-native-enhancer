import { useEffect, useRef } from 'react';

/**
 * Custom hook to execute a callback function repeatedly at a specified interval.
 * @param callback The function to be executed at each interval.
 * @param delay The delay (in milliseconds) between each execution of the callback function.
 * @example
 * // Example 1: Automatically switch carousel slides every 5 seconds
 * useTimer(() => {
 *   // Logic to switch to the next carousel slide
 *   // Example: setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
 * }, 5000);
 * @example
 * // Example 1: Automatic Carousel Slides Transition
 * const autoSlideTimer = useTimer(() => {
 *   // Logic to switch to the next carousel slide
 *   const nextSlideIndex = (currentSlideIndex + 1) % totalSlides;
 *   setCurrentSlideIndex(nextSlideIndex);
 * }, 5000);
 * // Cleanup function to stop the timer when the carousel component unmounts
 * useEffect(() => {
 *   return () => {
 *     clearInterval(autoSlideTimer);
 *   };
 * }, []);
 * @example
 * // Example 2: Token Refresh for Authentication
 * const tokenRefreshTimer = useTimer(() => {
 *   // Logic to refresh authentication token
 *   authService.refreshToken().then((newToken) => {
 *     // Update the authentication token in the application state
 *     setAuthToken(newToken);
 *   }).catch((error) => {
 *     // Handle token refresh error
 *     console.error('Failed to refresh token:', error);
 *   });
 * }, 900000); // Refresh token every 15 minutes (900,000 milliseconds)
 * // Cleanup function to stop the timer when the component unmounts or on logout
 * useEffect(() => {
 *   return () => {
 *     clearInterval(tokenRefreshTimer);
 *   };
 * }, []);
 */
const useTimer = (callback: CallableFunction, delay: number) => {
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      callback();
    }, delay);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [callback, delay]);

  return intervalRef.current;
};
export default useTimer;
