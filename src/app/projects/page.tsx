import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: "Hackathon" | "Personal" | "Group" | "College";
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "BorderBuddy AI",
    description:
      "Our team recently won the Public Interest Award at HackTrinity, a hackathon hosted by Trinity College Dublin. Competing under the theme of Generative AI x Law, we developed BorderBuddy AI, a web application designed to simplify visa and immigration law for travelers. Built in under 10 hours, our project helps users easily understand the legal implications of international travel using AI-driven analysis. Click to learn more. ",
    imageUrl: "/images/icon.jpg",
    category: "Hackathon",
    date: "January 2024",
  },
  {
    id: 2,
    title: "Future Project",
    description: "This project is still in development. More to come soon!",
    imageUrl: "/images/icon2.png",
    category: "Group",
    date: "January 2024",
  },
  // Add more projects as needed
];

const filterProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Projects" }];

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="container mx-auto px-10 py-8 flex flex-col">
        <Breadcrumb items={breadcrumbItems} />
        <Card className="mb-8 mt-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">My Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-lg">
              This page contains a collection of projects I&apos;ve worked on.
              Click on a project&apos;s card to learn more.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="container mx-auto px-20 py-8 flex flex-col">
        <div className="space-y-10">
          {["Hackathon", "Personal", "Group", "College"].map((category) => (
            <div key={category}>
              {filterProjectsByCategory(category as Project["category"]).map(
                (project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
                  >
                    <div className="p-4 border-b">
                      <div className="flex justify-between">
                        <div>
                          <h2 className="text-2xl font-semibold">
                            {project.title}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {project.category} Project
                          </p>
                        </div>
                        <span className="text-gray-500 mt-3.5 mr-3 text-1xl">
                          {project.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-3/4 p-4">
                        <p className="text-gray-600 text-lg text-left ml-5 mt-5">
                          {project.description}
                        </p>
                      </div>
                      <div className="w-1/6 mt-5 mb-5 mr-5 mx-auto">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          width={200}
                          height={200}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
