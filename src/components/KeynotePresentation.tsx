'use client';

import React, { useEffect, useRef } from 'react';

interface KeynotePresentationProps {
  presentationPath: string;
}

const KeynotePresentation: React.FC<KeynotePresentationProps> = ({ presentationPath }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Ensure the iframe loads the presentation
    if (iframeRef.current) {
      iframeRef.current.src = presentationPath;
    }
  }, [presentationPath]);

  return (
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
  );
};

export default KeynotePresentation;
