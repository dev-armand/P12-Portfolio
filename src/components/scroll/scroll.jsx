// This is the "Scroll animation" when scrolling it will make the sections appear or disapear

import { useState, useEffect, useRef } from 'react';

const useScrollVisibility = (thresholds) => {
  const [isVisible, setIsVisible] = useState(true);
  const currentSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top, bottom } = currentSectionRef.current.getBoundingClientRect();
      const [thresholdAppear, thresholdDisappear] = thresholds;

      if (top < thresholdAppear && bottom > thresholdDisappear) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [thresholds]);

  return [currentSectionRef, isVisible];
};

export default useScrollVisibility;