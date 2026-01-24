import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageTransition } from "@/components/PageTransition";
import Image from "next/image";

const Page = () => {
  const project = {
    title: "Slot-based Driving",
    description:
      "Implementation of slot-based driving on a platoon of autonomous robots.",
    imageUrl: "/images/placeholder-thesis.jpg", // Placeholder image path
    category: "Thesis",
    date: "Ongoing",
    // githubUrl: "" // cant add?
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
              <div className="mt-5 max-w-5xl mx-auto lg:max-w-none lg:mx-0">
                <div className="relative h-80 lg:h-60 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/projects/thesis/db21j_robot.png"
                    alt="Slot-based Driving"
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
                    Project Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 dark:border-zinc-700 my-12"></div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="max-w-5xl">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Abstract
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                This thesis ...
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                More details coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Page;
