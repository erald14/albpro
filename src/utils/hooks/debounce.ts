import { useEffect, useRef } from 'react';

export function useDebounce(callback: () => void, delay: number, input: any) {
  // Use a ref to store the timer
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // If the search input is not empty...
    if (input) {
      // Clear the timer
      clearTimeout(timer.current);

      // Set a new timer that will perform the search after a delay
      timer.current = setTimeout(() => {
        callback();
      }, delay);
    }

    // Return a cleanup function to clear the timer when the component unmounts
    return () => {
      clearTimeout(timer.current);
    };
  }, [input]);
}
