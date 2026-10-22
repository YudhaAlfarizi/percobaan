import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export const PricingSection: React.FC = () => {
  const { ref, getFadeClass, getDelayStyle } = useInViewAnimation<HTMLElement>(0.1);

  return (
    <section ref={ref} className="w-full py-12 px-6" id="pricing">
      <div className="max-w-4xl mx-auto md:ml-auto md:mr-0 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Dark */}
          <div
            className={`bg-[#051A24] rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] text-[#F6FCFF] ${getFadeClass(
              '0.1s'
            )}`}
            style={getDelayStyle('0.1s')}
          >
            <div>
              <h3 className="text-[22px] font-medium text-[#F6FCFF] tracking-tight mb-3">
                Monthly Partnership
              </h3>
              <p className="text-sm md:text-base text-[#E0EBF0] leading-relaxed mb-8">
                A dedicated creative design team.
                <br />
                You work directly with Viktor.
              </p>
            </div>

            <div>
              <div className="mb-8">
                <span className="text-2xl font-semibold text-[#F6FCFF] tracking-tight">$5,000</span>
                <p className="text-xs text-[#E0EBF0]/80 mt-1 uppercase tracking-wider font-mono">
                  Monthly
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="secondary"
                  href="https://halaskastudio.com/./book"
                  target="_blank"
                  className="bg-white text-[#051A24] hover:bg-neutral-100"
                >
                  Start a chat
                </Button>
                <Button
                  variant="secondary"
                  href="https://halaskastudio.com/./book"
                  target="_blank"
                  className="bg-transparent text-[#F6FCFF] border border-[#F6FCFF]/20 hover:bg-white/10"
                >
                  How it works
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2: Light */}
          <div
            className={`bg-white rounded-[40px] pl-10 pr-10 md:pr-24 pt-8 pb-10 flex flex-col justify-between shadow-[0_4px_16px_rgba(0,0,0,0.08)] text-[#051A24] border border-neutral-100 ${getFadeClass(
              '0.2s'
            )}`}
            style={getDelayStyle('0.2s')}
          >
            <div>
              <h3 className="text-[22px] font-medium text-[#0D212C] tracking-tight mb-3">
                Custom Project
              </h3>
              <p className="text-sm md:text-base text-[#051A24]/75 leading-relaxed mb-8">
                Fixed scope, fixed timeline.
                <br />
                Same team, same standards.
              </p>
            </div>

            <div>
              <div className="mb-8">
                <span className="text-2xl font-semibold text-[#0D212C] tracking-tight">$5,000</span>
                <p className="text-xs text-[#051A24]/60 mt-1 uppercase tracking-wider font-mono">
                  Minimum
                </p>
              </div>

              <div>
                <Button
                  variant="tertiary"
                  href="https://halaskastudio.com/./book"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  Start a chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
