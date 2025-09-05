import { Button } from "@/components/ui/button"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ThemeToggle"
import { PageTransition } from "@/components/PageTransition"
import cvImage from "./images/CV.jpg"
import kxLogo from './images/KX_Logo.jpg'
import ossLogo from './images/OSS_Logo.jpg'
import hapLogo from './images/HAP_Logo.jpg'

export default function Home() {
  const education = [
    {
      degree: 'MAI in Computer Engineering',
      institution: 'Trinity College Dublin',
      period: '2021 – Present',
      description: [
        <>
          Currently pursuing a{" "}
          <a
            href="https://www.tcd.ie/engineering/current-students/undergraduate/engineering/year-five-mai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 underline"
          >
            Masters in Computer Engineering
          </a>
          {" "}with focus on Machine Learning
        </>
      ],
    },
    {
      degree: 'Erasmus at KU Leuven',
      institution: 'KU Leuven, Belgium',
      period: '2025 2nd Semester',
      description: [
        <>
          I studied abroad and took modules from the {" "}
          <a href="https://www.kuleuven.be/programmes/master-artificial-intelligence#About" target="_blank" rel="noopener noreferrer" className="text-gray-600 underline">
            KUL Masters in Artificial Intelligence programme
          </a>
          .
        </>
      ],
    }
  ]

  const experiences = [
    {
      role: 'Software Engineering Intern',
      company: 'KX',
      period: 'Jun 2024 – Aug 2024',
      description: ['Conducted benchmarks for the latest KDB.AI releases, providing performance results for the marketing sales teams',
                    'Developed an internal ad-hoc benchmarking pipeline for developers to ensure possible performance degradation is caught at an early stage.',
                    'Utilised SonarQube for static code analysis, focusing on reducing code complexity, eliminating code smells bugs, and improving overall code maintainability'],
      skills: ['Python', 'Docker', 'AWS', 'SonarQube', 'Machine Learning'],
      image: kxLogo.src
    },
    {
      role: 'Event Crew',
      company: 'OSS Recruitment',
      period: 'Jan 2024 – May 2024',
      description: ['Worked across the country at Ireland\'s largest festivals/concerts',
        'Worked Front of House at the main stage at Electric Picnic \'23, operating main spotlights for Billie Eilish, Harry Styles & The Killers in front of a crowd of 70 thousand',
        'Set up Guinness 6 Nation Rugby Grand Slam winning podium for a sold out stadium'
      ],
      skills: ['Front of House', 'Event Crew'],
      image: ossLogo.src
    },
    {
      role: 'Bar Supervisor',
      company: 'HAP Solutions Group',
      period: 'May 2024 – Jul 2024',
      description: ['Supervised a team of 107 bar staff at main stage at Electric Picnic \'25',
      ],
      skills: ['Bar Supervisor', 'Event Crew'],
      image: hapLogo.src
    }
  ]
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Stephen Haskins' },
  ];

  return (
    <PageTransition>
      <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen scroll-smooth">
        <ThemeToggle />
        <div className="container mx-auto px-10 py-8 flex flex-col min-h-screen">
        {/* Breadcrumb */}
        <div className="mt-auto">
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <div className="flex-grow flex flex-col md:flex-row items-center justify-between mb-8">
          {/* Buttons */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Stephen Haskins</h1>
            <p className="text-xl text-gray-600 mb-6">
              Fifth year Computer Engineering student at Trinity College Dublin.
            </p>
            <div className="space-x-4">
              <Link href="/projects"> 
                <Button className="bg-[#14171f] text-white">View Projects</Button>
              </Link>
              <Link href="#about">
                <Button variant="outline">About Me</Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
            <Image
              src="/headshot.jpeg"
              alt="Headshot"
              width={600}
              height={600}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container mx-auto px-10 pb-16">
        <Card className="p-6 shadow-lg">
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Left side content */}
            <div className="md:auto mb-8 md:mb-0 pr-8">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-5xl font-bold dark:text-white">About Me</h1>
                <div className="flex gap-3">
                  <Link href={cvImage.src} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="mb-4">View CV</Button>
                  </Link>
                </div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                I&apos;m Stephen Haskins, a fifth year Computer Engineering
                student at Trinity College Dublin. I&apos;m currently working on my thesis on ... See my projects page for more info
              </p>
              
              <h2 className="text-2xl font-semibold mb-3 dark:text-white">Education</h2>
              <div className="mb-6 pl-4">
                {education.map((edu) => (
                  <div key={`${edu.degree}-${edu.institution}`} className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{edu.period}</p>
                    {Array.isArray(edu.description) ? (
                                              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-3">
                          {edu.description.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{edu.description}</p>
                      )}
                  </div>
                ))}
              </div>
              
              <hr className="my-8 border-gray-300 dark:border-gray-600" />
              
              <h2 className="text-2xl font-semibold mb-3 dark:text-white">Experience</h2>
              <div className="space-y-4 mb-6">
                {experiences.map((exp) => (
                  <Card key={`${exp.role}-${exp.company}`} className="p-4 dark:bg-zinc-800 dark:border-zinc-700">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold dark:text-white">{exp.role}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                        {Array.isArray(exp.description) ? (
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-3">
                            {exp.description.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                        )}
                        <h4 className="text-sm font-semibold mb-2 dark:text-white">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((s) => (
                            <Badge key={s} variant="secondary" className="text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-zinc-600 border-gray-300 dark:border-zinc-500">{s}</Badge>
                          ))}
                        </div>
                      </div>
                      {exp.image ? (
                        <div className="w-34 h-34 shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-zinc-700 m-3 mr-6">
                          <Image src={exp.image as unknown as string} alt="Experience image" width={96} height={96} className="object-cover w-full h-full" />
                        </div>
                      ) : null}
                    </div>
                  </Card>
                ))}
              </div>
              
              <hr className="my-8 border-gray-300 dark:border-gray-600" />

              <h2 className="text-2xl font-semibold mb-3 dark:text-white">Achievements</h2>
              <ul className="list-disc list-inside text-blue-600 dark:text-blue-400 mb-6">
                <li>
                  <a href="https://www.tcd.ie/computing/undergraduate/prizes/prize-winners/2023/stephen-haskins/">
                    HackTrinity Public Interest Award Winner 2024
                  </a>
                </li>
              </ul>
              
              <hr className="my-8 border-gray-300 dark:border-gray-600" />
              
              <h2 className="text-2xl font-semibold mb-3 dark:text-white">Hobbies</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">I have a strong passion for photography, starting when I bought a €30 film camera in a car boot sale in Dresden. This complements my love for travelling, you can see some photos below.
              </p>
              <Link href="/photography">
                <Button size="default" className="bg-[#14171f] text-white">View Photography</Button>
              </Link>
            </div>

            {/* Right side content removed */}
          </div>
        </Card>
      </div>
      </div>
    </PageTransition>
  )
}
