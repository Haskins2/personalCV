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
    title: "Computer Vision Project",
    description: "Developed and trained an end-to-end neural network for classifying 20 object classes in colour images",
    imageUrl: "/CV_p.jpg",
    category: "Group (4)",
    date: "March 2025",
    githubUrl: "https://github.com/Haskins2/CV_GA2"
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.title }
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
              <div className="mt-5 max-w-5xl mx-auto lg:max-w-none lg:mx-0">
                <div className="relative h-80 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold mb-3 dark:text-white">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="dark:bg-zinc-600 dark:text-white">
                      {project.category}
                    </Badge>
                    <span className="text-gray-600 dark:text-gray-400">
                      {project.date}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 dark:text-white">
                    Project Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.githubUrl && (
                  <div className="flex justify-left mb-0">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
                      <Button className="w-full md:w-auto bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black flex items-center mb-0">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                This project uses the PASCAL VOC 2009 dataset, consisting of colour images with different object
                classes (e.g. animal: <em>bird, cat, ...</em>; vehicle: <em>aeroplane, bicycle, ...</em>), totalling 20 classes.
                We developed and trained an end to end neural network for classifying these objects using a fine-tuned
                version MobileNetV2.
              </p>

              <h3 className="text-2xl font-semibold mb-3 dark:text-white">Base Model</h3>
              <ul className="list-disc pl-10 text-gray-700 dark:text-gray-300 mb-6">
                <li>
                  MobileNetV2 pre-trained on ImageNet serves as our feature extractor. This lightweight but powerful
                  architecture provides a strong foundation for our classification task.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 dark:text-white">Custom Classification Head</h3>
              <ul className="list-disc pl-10 text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                <li>Global Average Pooling layer to reduce spatial dimensions</li>
                <li>Dense layer (512 units) with ReLU activation</li>
                <li>Dropout layer (0.3) for regularization</li>
                <li>Dense layer (256 units) with ReLU activation</li>
                <li>Final Dense layer with sigmoid activation for multi-label classification</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-3 dark:text-white">Training Strategy</h3>
              <ul className="list-disc pl-10 text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                <li>Two-phase training approach:</li>
                <ul className="list-disc pl-12 space-y-1">
                  <li>Initial training with frozen base model</li>
                  <li>Fine-tuning phase with last 5 blocks of MobileNetV2 unfrozen</li>
                </ul>
                <li>Learning rate reduction during fine-tuning (50% of initial rate)</li>
                <li>Batch size reduction during fine-tuning for better stability</li>
              </ul>

              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg mb-8">
                <Image
                  src="/overfitting.jpg"
                  alt="Computer Vision project overview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="text-2xl font-semibold mb-3 dark:text-white">Advanced Features</h3>
              <ul className="list-disc pl-10 text-gray-700 dark:text-gray-300 mb-6 space-y-1">
                <li>Class-weighted loss function was implemented to handle the severe class imbalance.</li>
                <li>Data augmentation pipeline was used to improve model robustness and prevent overfitting on limited training dataset.</li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-3 dark:text-white">Results</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Our final system achieved a mean F1 score of 0.83, reflecting good overall per-image multi-label performance. The below images show two good predictions from our model.
              </p>
            </div>
            
            <div className="max-w-5xl mb-8">
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/example.jpg"
                  alt="Computer Vision project overview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            <div className="max-w-5xl mb-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                The following examples illustrate some of the model&apos;s incorrect predictions, highlighting the types of challenges and limitations that impacted overall performance. Here we could criticise the ground truth, asking questions such as &quot;Is it fair to be penalising the model if objects are so heavily obstructed?&quot;
              </p>
            </div>
            
            <div className="max-w-5xl mb-8">
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/bad_example.jpg"
                  alt="Computer Vision project overview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Page;


