import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const BASE_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Anderson',
    role: 'CEO, Data.storage',
    quote:
      'With very little guidance team delivered designs that were consistently spot on. The attention to typography and spatial hierarchy made our data platform feel remarkably human and refined.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '2',
    name: 'alexwu',
    role: 'Founder, Nexgate',
    quote:
      'Viktor led the creation of our best fundraising deck to date! Every slide had purpose, the visuals were magnetic, and investors instantly commented on how distinguished we looked compared to the market.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '3',
    name: 'James Mitchell',
    role: 'VP Product, LaunchPad',
    quote:
      'Working with Viktor transformed our product vision into an intuitive experience. Their Apple pedigree shows in the micro-interactions, the pacing, and the relentless refusal to cut corners.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '4',
    name: 'Rachel Foster',
    role: 'Co-founder, Nexus Labs',
    quote:
      'The design quality exceeded our expectations at every milestone. Viktor and his crew were fast, uncompromising on aesthetic discipline, and deeply committed to our launch success.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: '5',
    name: 'David Zhang',
    role: 'Head of Design, Paradigm Labs',
    quote:
      'Incredible work from start to finish. Viktor brings that rare combination of high-level creative vision and precise execution. We ship faster and with vastly superior customer feedback.',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

// Tripled for infinite looping feel
const TRIPLE_TESTIMONIALS = [
  ...BASE_TESTIMONIALS.map((t) => ({ ...t, instanceId: `${t.id}-0` })),
  ...BASE_TESTIMONIALS.map((t) => ({ ...t, instanceId: `${t.id}-1` })),
  ...BASE_TESTIMONIALS.map((t) => ({ ...t, instanceId: `${t.id}-2` })),
];

export const TestimonialCarousel: React.FC = () => {
  const { ref, getFadeClass, getDelayStyle } = useInViewAnimation<HTMLElement>(0.1);
  const [currentIndex, setCurrentIndex] = useState(BASE_TESTIMONIALS.length);
  const [isHovered, setIsHovered] = useState(false);
  const [cardWidth, setCardWidth] = useState(427.5);
  const gap = 24;

  // Responsive card width calculation
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 768) {
        setCardWidth(window.innerWidth - 48);
      } else {
        setCardWidth(427.5);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Auto-scroll every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= BASE_TESTIMONIALS.length * 2) {
          // Seamless reset towards middle
          return BASE_TESTIMONIALS.length;
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1;
      if (next < 0) {
        return BASE_TESTIMONIALS.length * 2 - 1;
      }
      return next;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1;
      if (next >= TRIPLE_TESTIMONIALS.length) {
        return BASE_TESTIMONIALS.length;
      }
      return next;
    });
  };

  return (
    <section ref={ref} className="w-full py-20 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row aligned right/container on desktop */}
        <div className="max-w-4xl md:ml-auto w-full mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2
                className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight ${getFadeClass(
                  '0.1s'
                )}`}
                style={getDelayStyle('0.1s')}
              >
                What <span className="font-mondwest">builders</span> say
              </h2>
            </div>

            <div
              className={`flex items-center gap-3 shrink-0 ${getFadeClass('0.2s')}`}
              style={getDelayStyle('0.2s')}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-black text-black" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#0D212C] tracking-tight">
                Clutch 5/5
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Area */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Controls */}
          <div className="flex items-center justify-end gap-3 mb-6 max-w-4xl md:ml-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-neutral-100 active:scale-95 transition-all text-[#0D212C] cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-[#0D212C]/20 flex items-center justify-center hover:bg-neutral-100 active:scale-95 transition-all text-[#0D212C] cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Cards Track */}
          <div className="overflow-visible py-4">
            <div
              className="flex gap-6 will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {TRIPLE_TESTIMONIALS.map((item, idx) => {
                const isCurrent = idx === currentIndex;
                return (
                  <div
                    key={item.instanceId}
                    style={{ width: `${cardWidth}px` }}
                    className={`shrink-0 bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] px-6 md:pl-10 md:pr-24 py-8 flex flex-col justify-between transition-all duration-700 border border-neutral-100 ${
                      Math.abs(idx - currentIndex) > 2 ? 'opacity-40 scale-95' : 'opacity-100 scale-100'
                    }`}
                  >
                    <div>
                      {/* SVG quote mark icon */}
                      <div className="mb-6">
                        <svg
                          width="32"
                          height="24"
                          viewBox="0 0 32 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[#051A24]/30 fill-current"
                        >
                          <path d="M0 24V14.4C0 6.4 4.8 1.6 13.6 0L14.8 3.6C9.2 4.8 6.4 8 6.4 12.8H14.8V24H0ZM17.2 24V14.4C17.2 6.4 22 1.6 30.8 0L32 3.6C26.4 4.8 23.6 8 23.6 12.8H32V24H17.2Z" />
                        </svg>
                      </div>

                      <p className="text-base text-[#0D212C] leading-relaxed mb-8">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover shrink-0 ring-1 ring-neutral-200"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm text-[#0D212C]">{item.name}</span>
                        <span className="text-xs text-[#273C46] flex items-center gap-1 font-mono">
                          <span>&rarr;</span> {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
