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
    id: 1,
    title: "BorderBuddy AI",
    description: "A web application designed to simplify visa and immigration law for travelers using AI-driven analysis.",
    imageUrl: "/BorderBuddy_AI.jpg",
    category: "Group Hackathon (4)",
    date: "October 2024",
    skills: ["Full Stack", "Python", "RAG", "LLM API"],
    link: "https://borderbuddyai.com"
  },
  
  {
    id: 2,
    title: "Information Retrieval Pipeline",
    description: "A RAG chat-bot project involving data preprocessing, TF-IDF retrival and generating responses using Claude's API.",
    imageUrl: "/RAG.jpg",
    category: "Solo",
    date: "May 2025",
    skills: ["Python", "Docker",  "RAG", "LLM API",],
    link: "/projects/information-retrieval-pipeline"
  },
  {
    id: 3,
    title: "Machine Learning Project",
    description: "Developed both single and multi reinforcement learning agents in an Atari style game to compete in tournaments using PPO algorithm.",
    imageUrl: "/atari.jpg",
    category: "Group (2)",
    date: "May 2025",
    skills: ["Python", "Docker", "AWS", "ML"],
    link: "/projects/machine-learning-project"
  },
  {
    id: 4,
    title: "Computer Vision Project",
    description: "More to come soon",
    imageUrl: "/CV_p.jpg",
    category: "Group (4)",
    date: "March 2025",
    skills: ["Python", "OpenCV", "Deep Learning"],
    link: "/projects/future-project"
  },
  {
    id: 5,
    title: "Biometrics Identification System",
    description: "More to come soon",
    imageUrl: "/fingerprint.jpeg",
    category: "Solo",
    date: "January 2024",
    skills: ["Deep Learning", "Computer Vision"],
    link: "/projects/future-project"
  },
  {
    id: 6,
    title: "This Website",
    description: "More to come soon",
    imageUrl: "/headshot.jpeg",
    category: "Solo",
    date: "January 2024",
    skills: ["Deep Learning", "Computer Vision"],
    link: "/projects/future-project"
  },
  // Add more projects as needed
];

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Projects" }];

const ProjectsPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-zinc-50 dark:bg-zinc-900 min-h-50">
        <ThemeToggle />
        <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
        <div className="mb-8">
          <div className="text-left max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-3 dark:text-white">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-1">
              A collection of some projects I&apos;ve worked on, from hackathons, college assignments to personal development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-[500px] dark:bg-zinc-800 dark:border-zinc-700">
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
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {project.category} • {project.date}
                  </p>
                </div>
                
                <div className="mb-2 flex-1 min-h-0">
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 h-[4.5rem]">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-4 flex-shrink-0">
                  <h4 className="text-sm font-semibold mb-2 dark:text-white">Skills used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs dark:bg-zinc-600 dark:text-white">
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
