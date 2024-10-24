import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: "hackathon" | "personal" | "group";
}

const projects: Project[] = [
  {
    id: 1,
    title: "BorderBuddy AI",
    description: "Placeholder description",
    imageUrl: "/images/project1.jpg",
    category: "personal",
  },
  {
    id: 2,
    title: "ScoreMySkill",
    description: "This project is still in development. More to come soon!",
    imageUrl: "/images/project2.jpg",
    category: "hackathon",
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
            Click on a project to learn more.
          </p>
        </div>
        <div className="space-y-16">
          {["hackathon", "personal", "group"].map((category) => (
            <div key={category}>
              <h2 className="text-3xl font-bold mb-4 text-left capitalize">
                {category} Projects
              </h2>
              {filterProjectsByCategory(category as Project["category"]).map(
                (project) => (
                  <div
                    key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden mb-8"
                >
                  <div className="md:flex md:flex-row-reverse">
                    <div className="md:flex-shrink-0">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-64 w-full object-cover md:w-96"
                      />
                    </div>
                    <div className="p-8 md:flex-grow">
                      <h2 className="text-2xl font-semibold mb-4">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 text-lg">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
