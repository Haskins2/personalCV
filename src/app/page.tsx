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
          Currently pursuing a{" "}
          <a
            href="https://www.tcd.ie/engineering/current-students/undergraduate/engineering/year-five-mai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline dark:text-gray-300"
          >
            Masters in Computer Engineering
          </a>{" "}
          with focus on Machine Learning
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
        "Utilised SonarQube for static code analysis, focusing on reducing code complexity, eliminating code smells bugs, and improving overall code maintainability",
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
      period: "2023 - Present",
      description: [
        "Evaluating and ranking AI-generated code responses to improve model accuracy and helpfulness.",
        "Reviewing technical content for correctness, safety, and adherence to guidelines.",
        "Contributing to the training of Large Language Models (LLMs) by providing expert feedback on code quality.",
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
                Fifth year Computer Engineering student at Trinity College
                Dublin.
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
            <div className="md:w-1/2 w-full bg-gray-200 dark:bg-gray-300 rounded-lg aspect-square flex items-center justify-center overflow-hidden">
              <Image
                src="/headshot.jpeg"
                alt="Headshot"
                width={620}
                height={630}
                className="object-cover"
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
                  I&apos;m Stephen Haskins, a final year Master&apos;s student
                  specialising in Computer Engineering at Trinity College
                  Dublin. I&apos;m passionate about reinforcement learning and
                  machine learning, with experience applying these techniques to
                  complex engineering challenges. I&apos;m seeking graduate
                  opportunities where I can contribute to innovative projects
                  and continue developing my skillset.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold mb-3 dark:text-white">
                  Education
                </h2>
                <div className="mb-6 pl-4">
                  {education.map((edu) => (
                    <div
                      key={`${edu.degree}-${edu.institution}`}
                      className="mb-4"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        {edu.period}
                      </p>
                      {Array.isArray(edu.description) ? (
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-3">
                          {edu.description.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {edu.description}
                        </p>
                      )}

                      {edu.modules && edu.modules.length > 0 ? (
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 pl-3">
                          <span className="font-semibold dark:text-white">
                            Highlighted modules:
                          </span>{" "}
                          {edu.modules.join(", ")}
                        </p>
                      ) : null}
                    </div>
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
                    &apos; and created an AI Visa information assistant in 3 days.
                    See my project{" "}
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
                  I&apos;m also passionate about photography, starting when I bought
                  a €30 film camera from a car boot sale in Dresden. This
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
