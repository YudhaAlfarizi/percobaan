import React from 'react';
import { Button } from './Button';

export const BottomNav: React.FC = () => {
  return (
    <aside
      aria-label="Floating quick contact navigation"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-full px-6 sm:px-8 py-2.5 nav-pill-shadow flex items-center gap-6 sm:gap-8 border border-neutral-200/80">
        <a
          href="#"
          aria-label="Viktor Oddy home"
          className="font-mondwest text-2xl font-semibold text-[#051A24] select-none hover:opacity-80 transition-opacity"
        >
          V
        </a>

        <Button
          variant="primary"
          href="https://halaskastudio.com/./book"
          target="_blank"
          className="px-6 py-2.5 text-sm"
        >
          Start a chat
        </Button>
      </div>
    </aside>
  );
};
