import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageTransition } from "@/components/PageTransition";
import Image from "next/image";

const Page = () => {
  const project = {
    title: "This Website",
    description:
      "A personal website that I designed, built and host to share my work, interests and experience.",
    imageUrl: "/headshot.jpeg",
    category: "Solo",
    date: "2025 to Present",
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.title },
  ];

  const technicalSkills = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Framer Motion",
    "Linux",
    "Nginx",
    "GitHub Actions",
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
                Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-1">
                After winning the 2024 HackTrinity hackathon, I promised myself
                that I would reinvest the prize money (which is now well
                exhausted) into self-development & server hosting.
                That&apos;s why this website has been
                live for nearly two years now and, through regular updates and
                refinement, has grown into something I am genuinely proud of.
                It gives me a place to share my projects, skills and experience
                in a way that feels more personal than a traditional CV.
              </p>

           
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                I began this project to showcase my work, but also to learn
                technologies that deeply interested me but were not covered in
                college. Building something real gave me the freedom to explore
                each part properly, from the interface through to the server it
                runs on. I particularly enjoyed creating something tangible
                that I could easily share with friends and family.
              </p>

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Technologies Used
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                The website is built with Next.js and TypeScript. Shadcn UI was used to help speed up the frontend development process.
              </p>

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Hosting and Deployment
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                Rather than using a out-of-the-box hosting solution, I set up my own
                Linode Linux server. I configured Nginx to serve the site and
                manage incoming traffic, which gave me practical experience
                with Linux, web servers and production hosting.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                I also created a complete CI/CD pipeline with GitHub Actions.
                Every push to the main branch runs linting, type checks, unit
                tests and end to end tests before building the application and
                deploying it to production automatically.
              </p>

              <figure className="mx-auto max-w-[1000px] mb-8">
                <Image
                  src="/images/cicd.png"
                  alt="GitHub Actions CI/CD workflow"
                  width={1600}
                  height={475}
                  className="rounded-lg"
                />
                <figcaption className="text-center text-gray-600 dark:text-gray-400 mt-2">
                  The GitHub Actions workflow used to test, build and deploy the
                  website.
                </figcaption>
              </figure>

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Technical Skills & Technologies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-4">
                Technologies used to build this site:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {technicalSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="dark:bg-zinc-800 dark:text-white text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Page;
