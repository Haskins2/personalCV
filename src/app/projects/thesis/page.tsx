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
    imageUrl: "/images/duckiebot.png", // Placeholder image path
    category: "Thesis",
    date: "Sept 2025 - May 2026",
    grade: "Distinction - 82%",
    // githubUrl: "" // cant add?
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.title },
  ];

  const technicalSkills = [
    "ROS Noetic",
    "Python",
    "Docker",
    "Nonlinear Control (Kanayama)",
    "Differential-Drive Kinematics",
    "TCP Socket Programming",
    "Streamlit (Live Visualisation)",
    "Data Logging & Evaluation (CSV/Pandas)",
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
                    src="/images/duckiebot.png"
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
                Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                Sustainable transport depends on predictable journey times.
                Public transit, shared mobility, and on-demand delivery all
                need reliability to compete with private car ownership. Today
                we can&apos;t guarantee journey times, because congestion is
                fundamentally unpredictable: vehicles compete for the same
                road space in real time. What if, instead, road space could be
                actively managed, with vehicles assigned a specific
                place and time on the road, rather than left to negotiate for
                it?
              </p>

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                What is Slot-based Driving (SBD)?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                SBD abstracts traffic as a flow of &quot;slots&quot;,
                each with a defined trajectory and speed, which a
                central controller assigns to individual vehicles. It&apos;s
                similar to air traffic control: where pilots communicate with the
                centralised ATC tower rather than negotiating directly with each
                other. Because the controller has a global view of the
                system, it can make better informed coordination decisions no individual
                driver could make alone.
              </p>
              <figure className="mx-auto max-w-[500px]">
                <Image
                  src="/images/sbd_slots.png"
                  alt="Slot-based Driving"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <figcaption className="text-center text-gray-600 dark:text-gray-400">
                  A visualisation of the slots assigned to vehicles in a
                  traffic flow.
                </figcaption>
              </figure>

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                The Research Question
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-4">
                SBD had only ever been explored in
                simulation. Moving it onto physical hardware introduces
                problems simulation ignores: noisy sensors, communication
                latency, and imperfect actuation. This thesis set out to
                answer:
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 py-1 mb-6 text-gray-800 dark:text-gray-200 text-lg font-semibold italic">
                Can SBD be feasibly implemented on physical robots,
                demonstrating coordinated manoeuvres under real-world
                constraints?
              </blockquote>

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Approach
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                To answer this, I built a physical testbed: a 2.6&nbsp;m &times; 1.9&nbsp;m
                indoor arena with two physical robots tracked by an
                Ultra-Wideband (UWB) real-time location system (RTLS). A central
                laptop controller generated moving virtual slots and assigned
                them to each robot over TCP, while an onboard Extended Kalman
                Filter fused UWB, magnetometer, and wheel-encoder data so each
                robot could localise itself reliably and mitigate sensor noise. A
                kinematics controller then tracked each robot against
                its assigned slot in real time. I designed five progressive
                experimental scenarios; from baseline tracking, through
                sensor-degradation resilience and individual manoeuvre
                primitives, to full coordinated multi-robot obstacle avoidance; to test the system incrementally, from a single robot
                following a slot to two robots resolving a conflict together.
              </p>

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Hardware Used
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-6">
                This thesis used two Duckiebot DB21J robotics platforms,
                small-scale differential-drive robots built around a Jetson
                Nano. An Ultra-Wideband (UWB) Real-Time Location System (RTLS)
                tracked the real-world x, y coordinates of each robot, fused
                with an onboard magnetometer and wheel encoders. 
              </p>
              <figure className="mx-auto max-w-[500px]">
                <Image
                  src="/images/duckiebot.png"
                  alt="Slot-based Driving"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <figcaption className="text-center text-gray-600 dark:text-gray-400">
                  The Duckiebot DB21J robotics platform.
                </figcaption>
              </figure>

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                System Architecture
              </h2>
              <figure className="mx-auto max-w-[800px]">
                <Image
                  src="/images/architectural_diagram.png"
                  alt="Architectural Diagram"
                  width={800}
                  height={800}
                  className="rounded-lg"
                />
                <figcaption className="text-center text-gray-600 dark:text-gray-400">
                  The architectural diagram of the system.
                </figcaption>
              </figure>

              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Technical Skills & Technologies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-left mb-4">
                Delivering this project end-to-end involved:
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

              <div className="border-t border-gray-300 dark:border-zinc-700 my-10"></div>

              <div className="flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 rounded-lg px-6 py-5">
                <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
                  Final Grade
                </h3>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {project.grade}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Page;