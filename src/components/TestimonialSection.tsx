import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export const TestimonialSection: React.FC = () => {
  const { ref: sectionRef, getFadeClass, getDelayStyle } = useInViewAnimation<HTMLElement>(0.1);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let isIntersecting = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    if (imageContainerRef.current) {
      observer.observe(imageContainerRef.current);
    }

    const onScroll = () => {
      if (!isIntersecting || !imageContainerRef.current) return;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        if (!imageContainerRef.current) return;
        const rect = imageContainerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress through viewport: -1 when at bottom, +1 when at top
        const center = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const delta = (viewportCenter - center) / (windowHeight / 2);
        // Clamped offset up to 200px
        const maxOffset = 100;
        const calculatedOffset = Math.max(-maxOffset, Math.min(maxOffset, delta * maxOffset));
        setOffsetY(calculatedOffset);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 px-6 flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-2xl w-full flex flex-col items-center">
        {/* Quote Icon */}
        <div
          className={`mb-6 text-slate-900 ${getFadeClass('0.1s')}`}
          style={getDelayStyle('0.1s')}
        >
          <Quote className="w-6 h-6 text-slate-900 fill-slate-900" />
        </div>

        {/* Large Quote Text */}
        <blockquote
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight font-normal mb-4 ${getFadeClass(
            '0.2s'
          )}`}
          style={getDelayStyle('0.2s')}
        >
          &lsquo;I left <span className="font-mondwest">Apple</span> to build the studio I always
          wanted to work with&rsquo;
        </blockquote>

        {/* Author */}
        <p
          className={`italic text-sm text-[#273C46] mb-10 ${getFadeClass('0.3s')}`}
          style={getDelayStyle('0.3s')}
        >
          Viktor Oddy
        </p>

        {/* Company Logos */}
        <div
          className={`flex items-center justify-center gap-8 md:gap-12 mb-12 ${getFadeClass(
            '0.4s'
          )}`}
          style={getDelayStyle('0.4s')}
        >
          <span
            style={{ width: '80px', fontSize: '24px' }}
            className="font-medium text-slate-900 inline-flex items-center justify-center tracking-tight"
          >
            Apple
          </span>
          <span
            style={{ width: '83px', fontSize: '24px' }}
            className="font-medium text-slate-900 inline-flex items-center justify-center tracking-tight"
          >
            IDEO
          </span>
          <span
            style={{ width: '110px', fontSize: '24px' }}
            className="font-medium text-slate-900 inline-flex items-center justify-center tracking-tight"
          >
            Polygon
          </span>
        </div>

        {/* Parallax Image */}
        <div
          ref={imageContainerRef}
          className={`w-full flex justify-center overflow-visible pt-4 pb-8 ${getFadeClass('0.5s')}`}
          style={getDelayStyle('0.5s')}
        >
          <div
            className="w-full max-w-xs transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translateY(${offsetY}px)` }}
          >
            <img
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85"
              alt="Chris Halaska"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
