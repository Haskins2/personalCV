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
    title: "Machine Learning Project",
    description: "Developed both single and multi reinforcement learning agents in an Atari style game to compete in tournaments using PPO algorithm.",
    imageUrl: "/atari.jpg",
    category: "Group (2)",
    date: "May 2025",
    githubUrl: "https://github.com/Haskins2/machine-learning-project",
    additionalImage: "/KAZ_env.jpg",
    secondDescription: "Our agent was trained using an AWS EC2 instance, allowing us to scale up training and achieve faster convergence. I personally developed the below RL training visualisation plot, which came in particularly useful when experimenting with the agent's feature vectors. This, similar to my DevOps internship experience, allowed us to catch issues early and save on both limited computational resources and time. ",
    secondImage: "/training_progress.jpg"
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
            <div className="max-w-5xl mb-8">
              <h3 className="text-2xl font-semibold mb-3 dark:text-white">Details</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              In this group project, we developed a reinforcement learning agent for the Atari-style game Knights-Archers-Zombies (KAZ). Utilising the PettingZoo KAZ environment and the RLlib framework, we implemented the Proximal Policy Optimisation (PPO) algorithm. A key component of our approach is our inclusion of manual feature engineering, transforming raw environment states into a more meaningful feature vectors for the model to learn from. 
              </p>
            </div>
            {project.additionalImage && (
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg mb-8">
                <Image
                  src={project.additionalImage}
                  alt={`${project.title} - Additional Image`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {project.secondDescription && (
              <div className="max-w-5xl">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left">
                  {project.secondDescription}
                </p>
              </div>
            )}

            {project.secondImage && (
              <div className="relative w-full h-96 lg:h-[550px] rounded-lg overflow-hidden shadow-lg mt-8">
                <Image
                  src={project.secondImage}
                  alt={`${project.title} - Training Progress`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <h3 className="text-2xl font-semibold mt-8 dark:text-white mb-4">Results</h3>
            Our trained agent's performance was submitted to a course leaderboard, with over 50 teams of 2 entered. With our final submission, we were placed 15th in the competition, demonstrating solid performance & placing us in the top 30% of all participating teams.
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Page;


