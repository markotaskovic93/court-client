import { useState, useEffect } from 'react';

const debounce = <F extends (...args: any[]) => void>(func: F, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<F>) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const useDeviceResolution = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth <= 992);
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
