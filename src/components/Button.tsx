import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  target,
  rel,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium text-sm md:text-base rounded-full transition-all duration-200 active:scale-[0.98] select-none whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none';

  let variantStyles = '';

  if (variant === 'primary') {
    variantStyles =
      'bg-[#051A24] text-white px-7 py-3 primary-button-shadow hover:bg-[#092634] focus-visible:ring-[#051A24]';
  } else if (variant === 'secondary') {
    variantStyles =
      'bg-white text-[#051A24] px-7 py-3 secondary-button-shadow hover:bg-neutral-50/90 focus-visible:ring-neutral-400';
  } else if (variant === 'tertiary') {
    variantStyles =
      'bg-white text-[#051A24] px-7 py-3 tertiary-button-shadow hover:bg-neutral-50/90 focus-visible:ring-neutral-400';
  }

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={combinedClasses}
        onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
