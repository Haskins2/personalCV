'use client';

import React from 'react';
import Image from 'next/image';

interface Slide {
  id: string;
  thumbnail: string;
  title?: string;
  description?: string;
}

interface VerticalSlidePresentationProps {
  slides: Slide[];
}

const VerticalSlidePresentation: React.FC<VerticalSlidePresentationProps> = ({ 
  slides
}) => {
  return (
    <div className="max-w-6xl">
      <div 
        style={{ 
          margin: 100, 
          padding: 0,
          lineHeight: 0,
          fontSize: 0
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} style={{ position: 'relative', width: '100%', height: 'auto' }}>
            <Image
              src={slide.thumbnail}
              alt={`Slide ${index + 1}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ 
                width: '100%', 
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlidePresentation;
