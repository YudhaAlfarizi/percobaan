import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
        {/* Left side: Start a chat primary button */}
        <div>
          <Button variant="primary" href="https://halaskastudio.com/./book" target="_blank">
            Start a chat
          </Button>
        </div>

        {/* Right side: ArrowUpRight icon, then two columns of links */}
        <div className="flex items-start gap-8 md:gap-14">
          <ArrowUpRight className="w-6 h-6 text-[#051A24] shrink-0 mt-0.5" />

          {/* Column 1: Services, Work, About */}
          <div className="flex flex-col gap-3">
            <a
              href="#pricing"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              Services
            </a>
            <a
              href="#projects"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              Work
            </a>
            <a
              href="#testimonials"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              About
            </a>
          </div>

          {/* Column 2: x.com, LinkedIn */}
          <div className="flex flex-col gap-3">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              x.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-[#051A24] hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
