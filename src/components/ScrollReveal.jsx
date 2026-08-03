import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  animation = 'fade-in-up', // fade-in-up, fade-in, slide-left, slide-right, zoom-in
  delay = 0, // milliseconds
  duration = 0.8, // seconds
  threshold = 0.05,
  once = true,
  style = {}
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef && !once) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Combine standard classes and inline styles
  const getAnimationStyles = () => {
    const baseStyle = {
      transitionProperty: 'opacity, transform, filter',
      transitionDuration: `${duration}s`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: `${delay}ms`,
      willChange: 'transform, opacity',
      ...style
    };

    if (isVisible) {
      return {
        ...baseStyle,
        opacity: 1,
        transform: 'none',
        filter: 'blur(0px)'
      };
    }

    // Initial states
    let initialTransform = 'translateY(24px)';
    let initialBlur = '0px';

    if (animation === 'fade-in') {
      initialTransform = 'none';
    } else if (animation === 'slide-left') {
      initialTransform = 'translateX(30px)';
    } else if (animation === 'slide-right') {
      initialTransform = 'translateX(-30px)';
    } else if (animation === 'zoom-in') {
      initialTransform = 'scale(0.96)';
    } else if (animation === 'fade-in-up') {
      initialTransform = 'translateY(24px)';
    }

    return {
      ...baseStyle,
      opacity: 0,
      transform: initialTransform,
      filter: initialBlur
    };
  };

  return (
    <div ref={domRef} style={getAnimationStyles()}>
      {children}
    </div>
  );
}
