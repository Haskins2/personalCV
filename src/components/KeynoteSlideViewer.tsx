'use client';

import React, { useEffect, useRef, useState } from 'react';

interface KeynoteSlideViewerProps {
  presentationPath: string;
  title: string;
}

const KeynoteSlideViewer: React.FC<KeynoteSlideViewerProps> = ({ 
  presentationPath, 
  title 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 7;

  useEffect(() => {
    // Load the presentation
    if (iframeRef.current) {
      iframeRef.current.src = presentationPath;
    }
  }, [presentationPath]);

  const goToSlide = (slideNumber: number) => {
    if (iframeRef.current) {
      // Send message to iframe to go to specific slide
      iframeRef.current.contentWindow?.postMessage({
        type: 'goToSlide',
        slideNumber: slideNumber
      }, '*');
      setCurrentSlide(slideNumber);
    }
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">
        {title}
      </h2>
      <div className="mb-4">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          Use the controls below to navigate through the presentation
        </p>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-zinc-600"
        >
          ← Previous
        </button>
        
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Slide {currentSlide + 1} of {totalSlides}
        </span>
        
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="px-4 py-2 bg-gray-200 dark:bg-zinc-700 text-gray-800 dark:text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 dark:hover:bg-zinc-600"
        >
          Next →
        </button>
      </div>

      {/* Slide Navigation Dots */}
      <div className="flex justify-center gap-2 mb-6">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? 'bg-blue-500'
                : 'bg-gray-300 dark:bg-zinc-600'
            }`}
          />
        ))}
      </div>

      {/* Presentation Frame */}
      <div className="w-full h-screen bg-black rounded-lg overflow-hidden shadow-2xl">
        <iframe
          ref={iframeRef}
          src={presentationPath}
          className="w-full h-full border-0"
          title="Keynote Presentation"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  );
};

export default KeynoteSlideViewer;
