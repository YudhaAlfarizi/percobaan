import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export const HeroSection: React.FC = () => {
  const { ref, getFadeClass, getDelayStyle } = useInViewAnimation<HTMLDivElement>(0.05);

  return (
    <section ref={ref} className="w-full flex justify-center px-6 pt-12 md:pt-16">
      <div className="max-w-[440px] w-full flex flex-col items-start text-left">
        {/* Logo text */}
        <h1
          className={`font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-4 ${getFadeClass(
            '0.1s'
          )}`}
          style={getDelayStyle('0.1s')}
        >
          Viktor Oddy
        </h1>

        {/* Tagline */}
        <p
          className={`font-mono text-xs md:text-sm text-[#051A24] mb-2 ${getFadeClass('0.2s')}`}
          style={getDelayStyle('0.2s')}
        >
          The creative studio of Viktor Oddy
        </p>

        {/* Main Heading */}
        <h2
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-[#0D212C] tracking-tight whitespace-nowrap ${getFadeClass(
            '0.3s'
          )}`}
          style={getDelayStyle('0.3s')}
        >
          Build the <span className="font-mondwest">next wave</span>,
          <br />
          the <span className="font-mondwest">bold way.</span>
        </h2>

        {/* Description */}
        <div
          className={`flex flex-col gap-6 text-sm md:text-base text-[#051A24] leading-relaxed mt-5 md:mt-6 ${getFadeClass(
            '0.4s'
          )}`}
          style={getDelayStyle('0.4s')}
        >
          <p>
            I spent seven years at Apple crafting products used by over a billion people. I founded
            Vortex Studio to bring that same level of thinking to innovators shaping what comes next.
          </p>
          <p>
            The studio is deliberately small. I guide the creative vision on every project, backed by
            a veteran design crew that moves fast without cutting corners.
          </p>
          <p>Projects start at $5,000 per month.</p>
        </div>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-6 w-full sm:w-auto ${getFadeClass(
            '0.5s'
          )}`}
          style={getDelayStyle('0.5s')}
        >
          <Button variant="primary" href="https://halaskastudio.com/./book" target="_blank">
            Start a chat
          </Button>
          <Button variant="secondary" href="#projects">
            View projects
          </Button>
        </div>
      </div>
    </section>
  );
};
