import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: "Hackathon" | "Personal" | "Group" | "College";
  date: string; // Add date field
}

const projects: Project[] = [
  {
    id: 1,
    title: "BorderBuddy AI",
    description: "Placeholder description",
    imageUrl: "/images/project1.jpg",
    category: "Hackathon",
    date: "January 2024", // Example date
  },
  {
    id: 2,
    title: "ScoreMySkill",
    description: "This project is still in development. More to come soon!",
    imageUrl: "/images/project2.jpg",
    category: "Group",
    date: "January 2024", // Example date
  },
 

  // Add more projects as needed
];

// Function to filter projects by category
const filterProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Projects" }];

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="container mx-auto px-10 py-8 flex flex-col">
        <div className="mt-auto">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 mb-12 mt-12">
          <h1 className="text-4xl font-bold mb-4 text-left">My Projects</h1>
          <p className="text-gray-600 text-lg text-left">
            This page contains a collection of projects I&apos;ve worked on.
            Each project is categorized into one of the following categories:
            Hackathon, Personal, Group, and College. Click on a project to learn
            more.
          </p>
        </div>
        <div className="space-y-16">
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
                        <span className="text-gray-500 mr-3 mt-3.5">{project.date}</span>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-3/4 p-4">
                        <p className="text-gray-600 text-lg">
                          {project.description}
                        </p>
                      </div>
                      <div className="w-1/4">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          width={600}
                          height={400}
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
