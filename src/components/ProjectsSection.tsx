import React from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: 'evr',
    name: 'evr',
    description: 'From idea to millions raised for a web3 AI product',
    imageUrl: 'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  },
  {
    id: 'automation-machines',
    name: 'Automation Machines',
    description: 'Streamlining industrial automation processes',
    imageUrl: 'https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif',
  },
  {
    id: 'xportfolio',
    name: 'xPortfolio',
    description: 'Modern portfolio management platform',
    imageUrl: 'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  },
];

const ProjectItem: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { ref, getFadeClass, getDelayStyle } = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className="w-full flex flex-col gap-6">
      {/* Text block offset left */}
      <div
        className={`ml-20 md:ml-28 ${getFadeClass('0.1s')}`}
        style={getDelayStyle('0.1s')}
      >
        <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-[#051A24] mb-1">
          {project.name}
        </h3>
        <p className="text-sm md:text-base text-[#051A24]/70">{project.description}</p>
      </div>

      {/* Full width image below */}
      <div
        className={`w-full overflow-hidden rounded-2xl shadow-lg bg-neutral-100 ${getFadeClass(
          '0.2s'
        )}`}
        style={getDelayStyle('0.2s')}
      >
        <img
          src={project.imageUrl}
          alt={project.name}
          className="w-full h-[320px] sm:h-[420px] md:h-[580px] lg:h-[640px] object-cover hover:scale-[1.01] transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-12" id="projects">
      <div className="flex flex-col gap-16 md:gap-20">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
