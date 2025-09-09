'use client';

import React, { useState, useEffect } from 'react';

const WorkInProgressBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start fade out after 4 seconds
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 4500);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`bg-red-100 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800 transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 py-2">
        <p className="text-red-700 dark:text-red-300 text-sm text-left">
          This website is a work in progress and may be missing project information
        </p>
      </div>
    </div>
  );
};

export default WorkInProgressBanner;
