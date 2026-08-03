import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, duration = 1500 }) {
  const [displayValue, setDisplayValue] = useState('0');
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Parse the value (e.g., "10+", "99.9%", "100%", "2")
    const match = value.toString().match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNum = parseFloat(match[1]);
    const suffix = match[2] || '';
    const isDecimal = match[1].includes('.');
    const decimals = isDecimal ? match[1].split('.')[1].length : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(elementRef.current);
          
          let startTime = null;
          
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentVal = progress * targetNum;
            
            // Format number based on original decimal places
            const formattedNum = currentVal.toFixed(decimals);
            setDisplayValue(`${formattedNum}${suffix}`);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, duration]);

  return <span ref={elementRef}>{displayValue}</span>;
}
