'use client';

import React from 'react';

interface Slide {
  id: string;
  thumbnail: string;
  title?: string;
  description?: string;
}

interface VerticalSlidePresentationProps {
  slides: Slide[];
  title: string;
}

const VerticalSlidePresentation: React.FC<VerticalSlidePresentationProps> = ({ 
  slides, 
  title 
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
          <img
            key={slide.id}
            src={slide.thumbnail}
            alt={`Slide ${index + 1}`}
            style={{ 
              width: '100%', 
              height: 'auto',
              margin: 0,
              padding: 0,
              display: 'block',
              lineHeight: 0,
              verticalAlign: 'top',
              border: 'none',
              outline: 'none'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalSlidePresentation;
