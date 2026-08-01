// src/ui/BackgroundCanvas.tsx
import React from 'react';

interface BackgroundCanvasProps {
  isArtOn: boolean;
}

export const BackgroundCanvas: React.FC<BackgroundCanvasProps> = ({ isArtOn }) => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        style={{
          backgroundImage: "url('/bg-pixel.png')",
        }}
        className={`
          absolute inset-0 bg-bottom bg-cover bg-no-repeat opacity-25
          will-change-transform
          transition-transform duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isArtOn 
            ? 'translate-y-0' 
            : 'translate-y-full'
          }
        `}
      />
    </div>
  );
};