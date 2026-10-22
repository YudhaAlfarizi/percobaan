import React from 'react';
import { MARQUEE_IMAGES } from '../data/marqueeImages';

export const MarqueeSection: React.FC = () => {
  // 8 images duplicated for seamless infinite scrolling (total 16)
  const duplicatedImages = [...MARQUEE_IMAGES, ...MARQUEE_IMAGES];

  return (
    <div className="w-full overflow-hidden mt-16 md:mt-20 mb-16 py-4 select-none">
      <div className="animate-marquee flex items-center">
        {duplicatedImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="shrink-0 mx-3 rounded-2xl overflow-hidden shadow-lg h-[280px] md:h-[500px] bg-neutral-100 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Creative work preview ${(index % MARQUEE_IMAGES.length) + 1}`}
              className="h-full w-auto object-cover select-none pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
