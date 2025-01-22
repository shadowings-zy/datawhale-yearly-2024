import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  });

  const [windowInitSize, setWindowInitSize] = useState({
    windowInitWidth: window.innerWidth,
    windowInitHeight: window.innerHeight
  });

  useEffect(() => {
    setWindowInitSize({
      windowInitWidth: window.innerWidth,
      windowInitHeight: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { ...windowSize, ...windowInitSize };
};
