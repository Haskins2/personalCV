"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageTransition } from "@/components/PageTransition";

export default function PhotographyPage() {
  const photosDir = "/photos";
  // Placeholder list; replace with your filenames once uploaded to public/photos
  const photoFiles = [
    'LONDON1.png',
    'LONDON2.png',
    'LONDON3.png',
    'LONDON4.png',
    'LONDON5.png',
    'HK1.png',
    'HK2.png',
    'HK3.png',
    'HK4.png',
    'HK5.png',
    'MK1.png',
    'MK2.png',
  ];

  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightboxSrc(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <PageTransition>
      <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
        <ThemeToggle />
        <div className="container mx-auto px-10 py-8">
        <div className="mb-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Photography" }]} />
        </div>
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Photography</h1>
        {photoFiles.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">Add images to <code>public/photos</code> and they will appear here.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {photoFiles.map((file) => (
              <button
                key={file}
                type="button"
                onClick={() => setLightboxSrc(`${photosDir}/${file}`)}
                className="rounded-lg overflow-hidden bg-gray-100 dark:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-zinc-500"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={`${photosDir}/${file}`}
                    alt={file}
                    fill
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        )}
        {lightboxSrc && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxSrc(null)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setLightboxSrc(null)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white"
              >
                Close
              </button>
              <div className="w-[90vw] max-w-5xl h-[80vh]">
                <Image
                  src={lightboxSrc}
                  alt="Enlarged photo"
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </PageTransition>
  );
}


