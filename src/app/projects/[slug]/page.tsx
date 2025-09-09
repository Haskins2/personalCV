import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageTransition } from "@/components/PageTransition";
import VerticalSlidePresentation from "@/components/VerticalSlidePresentation";
import { extractSlidesFromKeynote } from "@/lib/presentationUtils";
import { notFound } from "next/navigation";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  skills: string[];
  link: string;
  slug: string;
  presentationPath?: string;
  githubUrl?: string;
  projectDescription?: string;
  additionalImage?: string;
  secondDescription?: string;
  secondImage?: string;
  technicalDetails?: {
    overview: string;
    architecture: string;
    technologies: string[];
    challenges: string[];
    results: string[];
  };
}

const projects: Project[] = [
  {
    id: 2,
    title: "Information Retrieval Pipeline",
    description: "A RAG chat-bot project involving data preprocessing, TF-IDF retrieval and generating responses using Claude's API.",
    imageUrl: "/RAG.jpg",
    category: "Solo",
    date: "May 2025",
    skills: ["Python", "Docker", "RAG", "LLM API"],
    link: "/projects/information-retrieval-pipeline",
    slug: "information-retrieval-pipeline",
    presentationPath: "/IRSE_Presentation_html/index.html",
    githubUrl: "https://github.com/Haskins2/IRSE"
  },
  {
    id: 3,
    title: "Machine Learning Project",
    description: "Developed both single and multi reinforcement learning agents in an Atari style game to compete in tournaments using PPO algorithm.",
    imageUrl: "/atari.jpg",
    category: "Group (2)",
    date: "May 2025",
    skills: ["Python", "Docker", "AWS", "ML"],
    link: "/projects/machine-learning-project",
    slug: "machine-learning-project",
    githubUrl: "https://github.com/Haskins2/machine-learning-project",
    projectDescription: "This project involved developing sophisticated reinforcement learning agents capable of playing Atari-style games through both single-agent and multi-agent approaches. Using the Proximal Policy Optimization (PPO) algorithm, we trained agents to compete in tournament-style competitions, exploring the challenges of multi-agent coordination and competition in complex game environments.",
    additionalImage: "/KAZ_env.jpg",
    secondDescription: "The training process involved extensive experimentation with hyperparameters, reward shaping, and neural network architectures. We implemented both centralized and decentralized training approaches, comparing their effectiveness in multi-agent scenarios. The agents were trained using distributed computing on AWS infrastructure, allowing for parallel training of multiple model variants and faster iteration cycles.",
    secondImage: "/training_progress.jpg"
  }
  // Add more projects as needed
];

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.title }
  ];

  return (
    <PageTransition>
      <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
        <ThemeToggle />
        <div className="container mx-auto px-6 py-8">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Project Header Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Project Image */}
              <div className="mt-5 relative h-80 lg:h-60 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold mb-3 dark:text-white">
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
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">
                    Project Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.githubUrl && (
                  <div className="flex justify-left mb-0">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-black flex items-center mb-0">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        See GitHub
                      </Button>
                    </Link>
                  </div>
                )}

                <div className="flex gap-4">
                  {project.link.startsWith('http') && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#14171f] text-white hover:bg-[#14171f]/90 dark:bg-zinc-200 dark:text-black">
                        View Live Project
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Page Break */}
          <div className="border-t border-gray-300 dark:border-zinc-700 my-12"></div>

          {/* Project Description Section */}
          {project.projectDescription && (
            <div className="max-w-6xl mx-auto mb-12 ">
   
              <div className="max-w-5xl ">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-fit">
                  {project.projectDescription}
                </p>
              </div>
            </div>
          )}

          {/* Additional Image Section */}
          {project.additionalImage && (
            <div className="max-w-6xl mx-auto mb-12">
              <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.additionalImage}
                  alt={`${project.title} - Additional Image`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Second Description Section */}
          {project.secondDescription && (
            <div className="max-w-6xl mx-auto mb-12">
              <div className="max-w-5xl">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left">
                  {project.secondDescription}
                </p>
              </div>
            </div>
          )}

          {/* Second Image Section */}
          {project.secondImage && (
            <div className="max-w-6xl mx-auto mb-12">
              <div className="relative w-full h-96 lg:h-[550px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={project.secondImage}
                  alt={`${project.title} - Training Progress`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          {/* Results Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 dark:text-white text-left">
              Results
            </h2>
            results go here
          </div>

          {/* Presentation Section */}
          {project.presentationPath && (
            <VerticalSlidePresentation 
              slides={extractSlidesFromKeynote(project.presentationPath)}
              title="Project Presentation"
            />
          )}

          {/* Technical Details Section - Fallback for projects without presentation */}
          {project.technicalDetails && !project.presentationPath && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 dark:text-white text-center">
                Technical Implementation
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Overview Card */}
                <Card className="p-6 dark:bg-zinc-800 dark:border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">
                    System Overview
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.technicalDetails.overview}
                  </p>
                </Card>

                {/* Architecture Card */}
                <Card className="p-6 dark:bg-zinc-800 dark:border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">
                    Architecture
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.technicalDetails.architecture}
                  </p>
                </Card>

                {/* Technologies Card */}
                <Card className="p-6 dark:bg-zinc-800 dark:border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">
                    Key Technologies
                  </h3>
                  <ul className="space-y-2">
                    {project.technicalDetails.technologies.map((tech, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-[#14171f] dark:bg-zinc-200 rounded-full mr-3 flex-shrink-0"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Challenges Card */}
                <Card className="p-6 dark:bg-zinc-800 dark:border-zinc-700">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">
                    Key Challenges
                  </h3>
                  <ul className="space-y-2">
                    {project.technicalDetails.challenges.map((challenge, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              {/* Results Section */}
              <Card className="p-6 mt-8 dark:bg-zinc-800 dark:border-zinc-700">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  Project Results
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.technicalDetails.results.map((result, index) => (
                    <div key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <p className="text-gray-700 dark:text-gray-300">{result}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectPage;
