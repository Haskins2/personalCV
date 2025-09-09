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
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">
        {title}
      </h2>
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Scroll through the presentation slides below
        </p>
      </div>
      
      <div 
        style={{ 
          margin: 0, 
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
