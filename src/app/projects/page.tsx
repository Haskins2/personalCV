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
  category: "Hackathon" | "Personal" | "Group" | "College";
  date: string;
  skills: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "BorderBuddy AI",
    description: "A web application designed to simplify visa and immigration law for travelers using AI-driven analysis.",
    imageUrl: "/BorderBuddy_AI.png",
    category: "Hackathon",
    date: "January 2024",
    skills: ["Full Stack", "LLM\'s", "Web Development"],
    link: "https://borderbuddyai.com"
  },
  
  {
    id: 2,
    title: "RAG Pipeline",
    description: "An information retrieval project involving data preprocessing, TF-IDF retrival and generation of contextual responses using Claude's API.",
    imageUrl: "/RAG.png",
    category: "Personal",
    date: "January 2024",
    skills: ["TypeScript", "Next.js", "Database"],
    link: "/projects/future-project"
  },
  {
    id: 3,
    title: "Machine Learning Project",
    description: "Developed both single and multi reinforcement learning agents in an Atari style game to compete in college tournaments using PPO algorithm.",
    imageUrl: "/atari.png",
    category: "College",
    date: "January 2024",
    skills: ["TypeScript", "Next.js", "Database"],
    link: "/projects/future-project"
  },
  {
    id: 4,
    title: "Computer Vision Project",
    description: "More to come soon",
    imageUrl: "/CV_p.png",
    category: "Group",
    date: "January 2024",
    skills: ["TypeScript", "Next.js", "Database"],
    link: "/projects/future-project"
  },
  {
    id: 5,
    title: "Future Project",
    description: "More to come soon",
    imageUrl: "/images/icon2.png",
    category: "Group",
    date: "January 2024",
    skills: ["TypeScript", "Next.js", "Database"],
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
        <div className="container mx-20 px-10 py-8">
        <div className="mb-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        
        <div className="mb-8">
          <div className="text-left">
            <h1 className="text-4xl font-bold mb-3 dark:text-white">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-1">
              A collection of some projects I&apos;ve worked on, from hackathons, college assignments to personal development.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <Link href={project.link}>
                    <Button className="w-full bg-[#14171f] text-white hover:bg-[#14171f]/90 border-2 border-[#14171f]">
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
