import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageTransition } from "@/components/PageTransition";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  skills: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 7,
    title: "Thesis: Slot-based Driving",
    description:
      "Implementation of slot-based driving on a platoon of autonomous robots.",
    imageUrl: "/projects/thesis/db21j_robot.png",
    category: "Solo",
    date: "Ongoing",
    skills: ["Python", "Docker", "ROS & Robotics", "RL"],
    link: "/projects/thesis",
  },
  {
    id: 1,
    title: "Information Retrieval Pipeline",
    description:
      "A RAG chat-bot project involving data preprocessing, TF-IDF retrival and generating responses using Claude's API.",
    imageUrl: "/RAG.jpg",
    category: "Solo",
    date: "May 2025",
    skills: ["Python", "Docker", "RAG", "LLM API"],
    link: "/projects/information-retrieval-pipeline",
  },
  {
    id: 2,
    title: "Biometrics Identification System",
    description:
      "A multimodal biometric system combining fingerprint and iris recognition to solve a forensic investigation case.",
    imageUrl: "/fingerprint.jpeg",
    category: "Solo",
    date: "March 2025",
    skills: ["Docker", "Deep Learning", "Computer Vision"],
    link: "/projects/biometrics-identification-system",
  },
  {
    id: 3,
    title: "Machine Learning Project",
    description:
      "Developed both single and multi reinforcement learning agents in an Atari style game to compete in tournaments using PPO algorithm.",
    imageUrl: "/atari.jpg",
    category: "Group (2)",
    date: "May 2025",
    skills: ["Python", "Docker", "AWS", "ML"],
    link: "/projects/machine-learning-project",
  },
  {
    id: 4,
    title: "Computer Vision Project",
    description:
      "Developed and trained an end-to-end neural network for classifying 20 object classes in colour images.",
    imageUrl: "/CV_p.jpg",
    category: "Group (4)",
    date: "March 2025",
    skills: ["Python", "OpenCV", "Deep Learning"],
    link: "/projects/computer-vision-project",
  },
  {
    id: 5,
    title: "BorderBuddy AI",
    description:
      "A web application designed to simplify visa and immigration law for travelers using AI-driven analysis.",
    imageUrl: "/BorderBuddy_AI.jpg",
    category: "Group Hackathon (4)",
    date: "October 2024",
    skills: ["Full Stack", "Python", "RAG", "LLM API"],
    link: "https://borderbuddyai.com",
  },
  {
    id: 6,
    title: "Autonomous Buggy Project",
    description:
      "An autonomous buggy was developed using an Arduino and off the shelf IR sensors, US sensors and motors.",
    imageUrl: "/buggy.jpg",
    category: "Solo",
    date: "January 2024",
    skills: ["C++", "Electronics"],
    link: "https://github.com/Haskins2/Autonomous-Buggy-Project",
  },

  // Add more projects as needed
];

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Projects" }];

const ProjectsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
        <ThemeToggle />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          <div className="mb-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-4">
              <div className="text-left">
                <h1 className="text-3xl sm:text-4xl font-bold mb-3 dark:text-white">
                  My Projects
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-1">
                  A collection of some projects I&apos;ve worked on, from
                  hackathons, college assignments to personal development.
                </p>
              </div>
              <Link
                href="https://github.com/Haskins2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button className="w-1/2 md:w-auto bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black flex items-center mt-1">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-[460px] md:h-[500px] dark:bg-zinc-800 dark:border-zinc-700"
              >
                <div className="relative h-48 bg-gray-100 dark:bg-zinc-700 flex-shrink-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {project.category} • {project.date}
                    </p>
                  </div>

                  <div className="mb-2 flex-1 min-h-0">
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 md:h-[4.5rem]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-4 flex-shrink-0">
                    <h4 className="text-sm font-semibold mb-2 dark:text-white">
                      Skills used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs dark:bg-zinc-600 dark:text-white"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <Link href={project.link}>
                      <Button className="w-full bg-[#14171f] text-white hover:bg-[#14171f]/90 border-2 border-[#14171f] dark:bg-zinc-200 dark:border-zinc-400 dark:text-black">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
