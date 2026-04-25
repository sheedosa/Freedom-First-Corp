import React from 'react';

export const Logo = ({ variant = 'white' }: { variant?: 'white' | 'color' }) => {
  const logoUrl = 'https://lh3.googleusercontent.com/d/1KnZ0u0J25tIM6dbuGiOUIlZXNDe2JjH8';

  return (
    <img 
      src={logoUrl} 
      alt="Freedom First Logo" 
      className={`h-10 w-auto md:h-14 ${variant === 'white' ? 'brightness-0 invert' : ''}`}
      referrerPolicy="no-referrer"
    />
  );
};
