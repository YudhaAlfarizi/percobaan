import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MARQUEE_IMAGES } from '../data/marqueeImages';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface TrailThumbnail {
  id: number;
  x: number;
  y: number;
  rotation: number;
  image: string;
  createdAt: number;
}

export const PartnerSection: React.FC = () => {
  const { ref: sectionRef, getFadeClass, getDelayStyle } = useInViewAnimation<HTMLElement>(0.1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [thumbnails, setThumbnails] = useState<TrailThumbnail[]>([]);
  const lastSpawnTime = useRef<number>(0);
  const imageIndexRef = useRef<number>(0);
  const nextIdRef = useRef<number>(0);

  // Clean up thumbnails older than 1000ms
  useEffect(() => {
    let animId: number;

    const cleanup = () => {
      const now = performance.now();
      setThumbnails((prev) => {
        const filtered = prev.filter((item) => now - item.createdAt < 1000);
        return filtered.length === prev.length ? prev : filtered;
      });
      animId = requestAnimationFrame(cleanup);
    };

    animId = requestAnimationFrame(cleanup);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const now = performance.now();
    // Minimum 80ms interval
    if (now - lastSpawnTime.current < 80) return;
    lastSpawnTime.current = now;

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotation = Math.random() * 20 - 10; // -10 to +10 deg
    const image = MARQUEE_IMAGES[imageIndexRef.current % MARQUEE_IMAGES.length];
    imageIndexRef.current += 1;

    const newThumb: TrailThumbnail = {
      id: nextIdRef.current++,
      x,
      y,
      rotation,
      image,
      createdAt: now,
    };

    setThumbnails((prev) => [...prev.slice(-15), newThumb]);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-12 px-6" id="partner">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="max-w-7xl mx-auto py-32 md:py-48 px-6 bg-white rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-neutral-100 relative overflow-hidden flex flex-col items-center justify-center text-center cursor-default select-none"
      >
        {/* Spawned cursor thumbnails */}
        {thumbnails.map((item) => {
          const age = performance.now() - item.createdAt;
          const progress = Math.min(1, Math.max(0, age / 1000));
          const opacity = 1 - progress;
          const scale = 1 - progress * 0.3;

          return (
            <div
              key={item.id}
              className="absolute pointer-events-none rounded-xl overflow-hidden shadow-2xl z-10 w-32 md:w-44 aspect-video bg-neutral-900 border border-white/20 will-change-transform"
              style={{
                left: `${item.x}px`,
                top: `${item.y}px`,
                transform: `translate(-50%, -50%) rotate(${item.rotation}deg) scale(${scale})`,
                opacity: opacity,
                transition: 'opacity 0.1s linear',
              }}
            >
              <img
                src={item.image}
                alt="Studio preview"
                className="w-full h-full object-cover"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}

        {/* Centered Heading */}
        <h2
          className={`font-mondwest text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] font-normal text-[#0D212C] mb-12 tracking-tight z-20 ${getFadeClass(
            '0.1s'
          )}`}
          style={getDelayStyle('0.1s')}
        >
          Partner with us
        </h2>

        {/* CTA Button with avatar */}
        <div className={`z-20 ${getFadeClass('0.2s')}`} style={getDelayStyle('0.2s')}>
          <a
            href="https://halaskastudio.com/./book"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#051A24] text-white pl-2 pr-8 py-2 rounded-full primary-button-shadow hover:bg-[#092634] transition-all duration-200 active:scale-[0.98] select-none text-sm md:text-base font-medium group"
          >
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Viktor Oddy"
              className="w-10 h-10 rounded-full object-cover mr-4 ring-2 ring-white/20 group-hover:ring-white/40 transition-all shrink-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <span className="tracking-tight">Start chat with Viktor</span>
          </a>
        </div>
      </div>
    </section>
  );
};
