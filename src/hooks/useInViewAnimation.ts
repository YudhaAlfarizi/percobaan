import { useEffect, useRef, useState } from 'react';

export function useInViewAnimation<T extends HTMLElement = HTMLDivElement>(threshold = 0.1) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getFadeClass = (delay?: string) => {
    return isInView ? 'animate-fade-in-up' : 'opacity-0';
  };

  const getDelayStyle = (delay?: string) => {
    return delay ? { animationDelay: delay } : {};
  };

  return { ref, isInView, getFadeClass, getDelayStyle };
}
