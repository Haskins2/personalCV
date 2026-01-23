import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageTransition } from "@/components/PageTransition";

const Page = () => {
  const project = {
    title: "Biometrics Identification System",
    description:
      "A multimodal biometric system combining fingerprint and iris recognition to solve a forensic investigation case.",
    imageUrl: "/fingerprint.jpeg",
    category: "Solo",
    date: "March 2025",
    githubUrl: undefined as string | undefined,
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.title },
  ];

  return (
    <PageTransition>
      <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
        <ThemeToggle />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="mt-5 relative h-80 lg:h-60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-3 dark:text-white">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge
                      variant="outline"
                      className="dark:bg-zinc-600 dark:text-white"
                    >
                      {project.category}
                    </Badge>
                    <span className="text-gray-600 dark:text-gray-400">
                      {project.date}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 dark:text-white">
                    Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed text-left mb-6">
                    {project.description}
                  </p>
                </div>

                {project.githubUrl && (
                  <div className="flex justify-left mb-0">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black flex items-center mb-0">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        See GitHub
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 dark:border-zinc-700 my-12"></div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="max-w-5xl">
              <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                Project Context
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                This project presents a murder investigation scenario where the
                only evidence is a fingerprint, and the goal is to identify the
                perpetrator from a database of 100 fingerprints. The system
                implements a comprehensive multimodal biometric recognition
                pipeline combining fingerprint and iris analysis
              </p>

              <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                Fingerprint Recognition
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                For fingerprint recognition, a custom FP enhancement pipeline
                was developedusing gradient-based segmentation, orientation
                estimation, and Gabor filtering. The minutiae detection
                algorithm identifies ridge terminations and bifurcations using
                8-neighborhood analysis, followed by keypoint matching and
                global alignment techniques.
              </p>

              <div className="max-w-4xl mx-auto mb-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col w-full md:w-1/2">
                    <div className="relative h-72 lg:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Image
                        src="/FP_Processing.jpeg"
                        alt="Fingerprint Processing Pipeline"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                      Fingerprint preprocessing pipeline
                    </span>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <div className="relative h-72 lg:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <Image
                        src="/Minutiae.jpeg"
                        alt="Fingerprint Matching Visualization"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center">
                      Minutiae matching visualization
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                Using a custom composite similarity metric, a similarity table
                was created and the below 8 fingerprints were returned. Clearly,
                these fingerprints are all the same, therefore our database must
                have been tampered with. This is where the Iris Recognition
                pipeline comes in.
              </p>

              <div className="max-w-5xl mx-auto mb-8">
                <div className="relative w-full h-26 lg:h-[220px] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Image
                    src="/FPs.jpeg"
                    alt="Top 8 fingerprint matches"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center block">
                  Top 8 fingerprint matches returned by the system
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                Iris Recognition
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                Similar to before, a custom preprocessing & enhancement system
                was applied to the raw iris images. Iris images underwent
                segmentation by means of Hough transform, and Daugman&apos;s
                rubber sheet model was used to normalise/unwrap the irises.
              </p>

              <div className="max-w-5xl mx-auto mb-8">
                <div className="relative w-full h-26 lg:h-[300px] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Image
                    src="/Iris_Enhancement.jpg"
                    alt="Iris Preprocessing Pipeline"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center block">
                  Iris preprocessing pipeline
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                A triplet loss encoder was used to encode the irises into robust
                feature embeddings that can effectively distinguish between
                different individuals&apos; irises. Finally, a cosine similarity
                table was created and the top-k matches were returned.
              </p>

              <div className="max-w-xl mx-auto mb-8">
                <div className="relative w-full h-26 lg:h-[457px] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Image
                    src="/triplet.jpeg"
                    alt="Triplet loss encoder architecture"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center block">
                  Triplet loss encoder architecture
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                Multimodal Fusion
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                A weighted score-level fusion was used to bring together both
                the Fingerprint and Iris identification systems and provide a
                confident conclusion. This complete system allows for a more
                robust and accurate biometric identification system, while also
                handling edge-cases where one modality might fail.
              </p>
              <div className="max-w-3xl mx-auto mb-8">
                <div className="relative w-full h-60 lg:h-[380px] rounded-lg overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <Image
                    src="/Multimodal_result.jpg"
                    alt="Triplet loss encoder architecture"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-center block">
                  Multimodal fusion results
                </span>
              </div>

              <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                Evaluation & Results
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                Comprehensive evaluation includes FAR/FRR curves, ROC analysis,
                DET curves, and CMC curves for both verification and
                identification scenarios. The system demonstrates improved
                accuracy through multimodal fusion compared to individual
                biometric systems, ultimately solving the forensic investigation
                by identifying the perpetrator through combined fingerprint and
                iris evidence.
              </p>
              <div className="bg-gray-100 dark:bg-zinc-800 rounded-lg p-4 mb-6 max-w-2xl mx-auto shadow">
                <h4 className="text-xl font-semibold mb-2 dark:text-white">
                  Analysis for Suspect ID: 13
                </h4>
                <div className="mb-2">
                  <span className="font-semibold">Fingerprint Scores:</span>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 text-base">
                    <li>
                      Label: <span className="font-mono">13</span>, Score:{" "}
                      <span className="font-mono">0.9928</span>
                    </li>
                    <li>
                      Fingerprint Match Score:{" "}
                      <span className="font-mono">0.9928</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-2">
                  <span className="font-semibold">Iris Scores:</span>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 text-base">
                    <li>
                      Label: <span className="font-mono">13</span>, Max
                      Similarity: <span className="font-mono">0.9970</span>
                    </li>
                    <li>
                      Number of iris samples:{" "}
                      <span className="font-mono">1</span>
                    </li>
                    <li>
                      Average Iris Score:{" "}
                      <span className="font-mono">0.9970</span>
                    </li>
                    <li>
                      Maximum Iris Score:{" "}
                      <span className="font-mono">0.9970</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">Ranking:</span>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 text-base">
                    <li>
                      Fingerprint Rank: <span className="font-mono">2</span>
                    </li>
                    <li>
                      Iris Rank: <span className="font-mono">2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Page;
