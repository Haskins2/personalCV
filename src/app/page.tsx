import { Button } from "@/components/ui/button";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PageTransition } from "@/components/PageTransition";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: (string | JSX.Element)[];
  modules: string[];
  image: string;
  imageAlt: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: (string | JSX.Element)[];
  skills: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageMarginY: number;
}

export default function Home() {
  const education: Education[] = [
    {
      degree: "MAI in Computer Engineering",
      institution: "Trinity College Dublin",
      period: "2021 – Present",
      description: [
        <>
          I have recently finished a 5 year{" "}
          <a
            href="https://www.tcd.ie/engineering/current-students/undergraduate/engineering/year-five-mai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline dark:text-gray-300"
          >
            Masters in Computer Engineering 
         </a> 
          . I am expected to graduate October 22nd.
  
        </>,
      ],
      modules: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Distributed Systems",
        "IoT Systems",
        "Urban Computing",
      ],
      image: "/icons/TCD.png",
      imageAlt: "Trinity College Dublin logo",
    },
    {
      degree: "Erasmus at KU Leuven",
      institution: "KU Leuven, Belgium",
      period: "2025 2nd Semester",
      description: [
        <>
          I studied abroad and took modules from the{" "}
          <a
            href="https://www.kuleuven.be/programmes/master-artificial-intelligence#About"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline dark:text-gray-300"
          >
            KUL Masters in Artificial Intelligence programme
          </a>
          .
        </>,
      ],
      modules: [
        "Reinforcement Learning",
        "Natural Language Processing",
        "Probabilistic Graphical Models",
        "AI Ethics & Society",
      ],
      image: "/icons/KUL.png",
      imageAlt: "KU Leuven logo",
    },
  ];

  const experiences: Experience[] = [
    {
      role: "Software Engineering Intern",
      company: "KX",
      period: "Jun 2024 – Aug 2024",
      description: [
        <>
          Worked as part of the{" "}
          <a
            href="https://kdb.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline dark:text-gray-300"
          >
            KDB.AI
          </a>{" "}
          team.
        </>,
        "Conducted benchmarks for the latest KDB.AI releases, providing performance results for the marketing sales teams",
        "Developed a GitLab CI/CD benchmarking pipeline for developers to ensure possible performance degradation is caught at an early stage.",
        "Used SonarQube for code analysis, focusing on reducing code complexity, eliminating code smells, bugs, and improving code maintainability",
      ],
      skills: [
        "Python",
        "Docker",
        "AWS",
        "SonarQube",
        "Shell",
        "Machine Learning",
      ],
      image: "/KX_Logo.jpeg",
      imageWidth: 96,
      imageHeight: 96,
      imageMarginY: 60,
    },
    {
      role: "AI Content Reviewer - SWE Specialist",
      company: "Outlier",
      period: "2023 - 2025",
      description: [
        "Designing complex prompts to challenge the latest AI models on their reasoning, problem solving and codingabilities.",
        "Evaluating and ranking code responses to improve model accuracy and helpfulness.",
        "Reviewing technical content for correctness, safety, and adherence to guidelines.",
      ],
      skills: [
        "LLM Evaluation",
        "Code Review",
        "Artificial Intelligence",
        "Python",
      ],
      image: "/outlier_logo.jpg",
      imageWidth: 130,
      imageHeight: 96,
      imageMarginY: 60,
    },
    {
      role: "Stage Event Crew",
      company: "OSS Recruitment",
      period: "Jan 2024 – May 2024",
      description: [
        "Worked as local crew member, assisting industry experts at Ireland's largest festivals/concerts",
        "Spotlight operator at Electric Picnic '23 main stage for headlining acts in front of a crowd of 70 thousand",
        <>
          Pitchside staff at Aviva Stadium, setting up{" "}
          <a
            href="https://www.irishrugby.ie/gallery/ireland-grand-slam-champions/#nanogallery/undefined/0/27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline dark:text-gray-300"
          >
            Guinness 6 Nation Rugby Grand Slam winning podium
          </a>{" "}
          and pyrotechnics for a sold out stadium
        </>,
      ],
      skills: [
        "Team Collaboration",
        "Communication Skills",
        "Problem Solving Under Pressure",
      ],
      image: "/OSS_Logo.jpeg",
      imageWidth: 130,
      imageHeight: 96,
      imageMarginY: 60,
    },
    {
      role: "Bar Supervisor",
      company: "HAP Solutions Group",
      period: "May 2024 – Jul 2024",
      description: [
        "Supervised main stage bar at Electric Picnic '25, ensuring smooth operations during peak demand",
        "Worked bartending shifts at Ireland's high-profile venues including the Aviva, Croke Park, Slane Castle and 3Arena",
      ],
      skills: ["Team Leadership", "Staff Training", "Operations Management"],
      image: "/HAP_Logo.jpg",
      imageWidth: 130,
      imageHeight: 96,
      imageMarginY: 35,
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Stephen Haskins" },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
        <ThemeToggle />
        <div className="container mx-auto px-4 sm:px-6 md:px-10 py-8 flex flex-col min-h-screen">
          {/* Breadcrumb */}
          <div className="mt-auto">
            <Breadcrumb items={breadcrumbItems} />
          </div>
          <div className="flex-grow flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            {/* Buttons */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Stephen Haskins
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 dark:text-gray-300">
                M.A.I. Computer Engineering at Trinity College Dublin.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects">
                  <Button className="bg-[#14171f] text-white dark:bg-gray-200 dark:text-gray-800">
                    View Projects
                  </Button>
                </Link>
                <Link href="#about">
                  <Button variant="outline" className="dark:bg-gray-600">
                    About Me
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="md:w-1/2 w-full border-8 border-gray-200 dark:border-gray-700 rounded-lg aspect-square overflow-hidden">
              <Image
                src="/headshot.jpeg"
                alt="Headshot"
                width={640}
                height={640}
              />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div
          id="about"
          className="container mx-auto px-4 sm:px-6 md:px-10 pb-16"
        >
          <Card className="p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-start justify-between">
              {/* Left side content */}
              <div className="md:auto mb-8 md:mb-0 md:pr-8">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white">
                    About Me
                  </h1>
                  <div className="flex gap-3">
                    <Link
                      href="/CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="mb-4 dark:bg-gray-300 dark:text-black"
                      >
                        View CV
                      </Button>
                    </Link>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                My name is Stephen Haskins and I&apos;ve just finished my Masters in Computer Engineering at Trinity College Dublin. I&apos;m really excited to discover how AI can optimise and even completely overhaul existing SWE workflows. I&apos;m passionate about reinforcement learning and machine learning, with experience applying these techniques to complex engineering challenges. 
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold mb-3 dark:text-white">
                  Education
                </h2>
                <div className="grid gap-4 mb-6 lg:grid-cols-2">
                  {education.map((edu) => (
                    <Card
                      key={`${edu.degree}-${edu.institution}`}
                      className="group flex flex-col overflow-hidden border-gray-200 bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800/70"
                    >
                      <div className="flex min-h-24 items-center gap-4 border-b border-gray-200 bg-gray-50/80 p-4 dark:border-zinc-700 dark:bg-zinc-900/40">
                        <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white p-2 shadow-sm sm:h-20 sm:w-24 dark:border-zinc-600">
                          <Image
                            src={edu.image}
                            alt={edu.imageAlt}
                            width={120}
                            height={80}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold leading-snug text-gray-900 sm:text-xl dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-4 sm:p-5">
                        <div>
                          <span className="inline-flex rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-zinc-600 dark:bg-zinc-700 dark:text-gray-300">
                            {edu.period}
                          </span>
                        </div>
                        <div className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                          {edu.description.map((point, index) => (
                            <p key={index}>{point}</p>
                          ))}
                        </div>

                        {edu.modules.length > 0 ? (
                          <div className="mt-5 border-t border-gray-200 pt-4 dark:border-zinc-700">
                            <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                              Highlighted modules
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.modules.map((module) => (
                                <Badge
                                  key={module}
                                  variant="secondary"
                                  className="border-gray-300 bg-gray-200 font-normal text-gray-700 dark:border-zinc-500 dark:bg-zinc-600 dark:text-gray-300"
                                >
                                  {module}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </Card>
                  ))}
                </div>

                <hr className="my-8 border-gray-300 dark:border-gray-600" />

                <h2 className="text-xl sm:text-2xl font-semibold mb-3 dark:text-white">
                  Experience
                </h2>
                <div className="space-y-4 mb-6">
                  {experiences.map((exp) => (
                    <Card
                      key={`${exp.role}-${exp.company}`}
                      className="p-4 dark:bg-zinc-800 dark:border-zinc-700"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold dark:text-white">
                            {exp.role}
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {exp.company}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                            {exp.period}
                          </p>
                          {Array.isArray(exp.description) ? (
                            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-3">
                              {exp.description.map((point, index) => (
                                <li key={index}>{point}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-300 mb-3">
                              {exp.description}
                            </p>
                          )}
                          <h4 className="text-sm font-semibold mb-2 dark:text-white">
                            Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((s) => (
                              <Badge
                                key={s}
                                variant="secondary"
                                className="text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-zinc-600 border-gray-300 dark:border-zinc-500"
                              >
                                {s}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {exp.image ? (
                          <div
                            className="hidden md:flex shrink-0 overflow-hidden rounded-md mr-3 items-center justify-center"
                            style={{
                              height: exp.imageHeight ?? 96,
                              width: exp.imageWidth ?? 96,
                              marginTop: exp.imageMarginY ?? 0,
                              marginBottom: exp.imageMarginY ?? 0,
                            }}
                          >
                            <Image
                              src={exp.image}
                              alt="Experience image"
                              width={exp.imageWidth ?? 96}
                              height={exp.imageHeight ?? 96}
                              className="object-contain"
                            />
                          </div>
                        ) : null}
                      </div>
                    </Card>
                  ))}
                </div>

                <hr className="my-8 border-gray-300 dark:border-gray-600" />

                <h2 className="text-xl sm:text-2xl font-semibold mb-3 dark:text-white">
                  Achievements
                </h2>
                <ul className="list-disc list-inside text-gray-700 mb-2 dark:text-white">
                  <li>
                    I took part in the &apos;
                    <a
                      href="https://hacktrinity.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" dark:text-blue-400 underline"
                    >
                      GenAI x Law HackTrinity Hackathon 2024
                    </a>
                    &apos; and created an AI Visa information assistant in 3
                    days. See my project{" "}
                    <Link
                      href="/projects"
                      className=" dark:text-blue-400 underline"
                    >
                      BorderBuddyAI
                    </Link>{" "}
                    for more info.
                  </li>
                </ul>

                <hr className="my-8 border-gray-300 dark:border-gray-600" />

                <h2 className="text-xl sm:text-2xl font-semibold mb-3 dark:text-white">
                  Hobbies
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4">
                  I&apos;m also passionate about photography, starting when I
                  bought a €30 film camera from a car boot sale in Dresden. This
                  complements my love for travelling, see some photos below.
                </p>
                <Link href="/photography">
                  <Button
                    size="default"
                    className="bg-[#14171f] text-white dark:bg-gray-200 dark:text-black"
                  >
                    View Photography
                  </Button>
                </Link>
              </div>

              {/* Right side content removed */}
            </div>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
}
