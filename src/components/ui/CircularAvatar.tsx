import React from 'react';

interface CircularAvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-12 h-12',   // 40px
  md: 'w-16 h-16',   // 64px
  lg: 'w-24 h-24',   // 96px
  xl: 'w-32 h-32',   // 128px
};

export const CircularAvatar: React.FC<CircularAvatarProps> = ({
  src,
  alt,
  size = 'md',
  className = '',
}) => {
  return (
    <div
      className={`relative inline-block overflow-hidden rounded-full ${sizeClasses[size]} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </div>
  );
};