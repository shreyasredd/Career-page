import { useEffect, useRef } from 'react';

interface UseScrollAnimationProps {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

export const useScrollAnimation = <T extends HTMLElement>({ 
  threshold = 0.1, 
  rootMargin = '0px',
  delay = 0,
  direction = 'up',
  distance = 20
}: UseScrollAnimationProps = {}) => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getTransform = () => {
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`;
        case 'down':
          return `translateY(-${distance}px)`;
        case 'left':
          return `translateX(${distance}px)`;
        case 'right':
          return `translateX(-${distance}px)`;
        default:
          return `translateY(${distance}px)`;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translate(0)';
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Set initial styles
    element.style.opacity = '0';
    element.style.transform = getTransform();
    element.style.transition = `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`;

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, delay, direction, distance]);

  return elementRef;
}; 