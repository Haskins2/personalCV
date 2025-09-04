import { Button } from "@/components/ui/button"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import cvImage from "./images/CV.jpg"
import kxLogo from './images/KX_Logo.jpg'
import ossLogo from './images/OSS_Logo.jpg'
import hapLogo from './images/HAP_Logo.jpg'

export default function Home() {
  const experiences = [
    {
      role: 'Software Engineering Intern',
      company: 'KX',
      period: 'Jun 2024 – Aug 2024',
      description: ['Conducted benchmarks for the latest KDB.AI releases, providing performance results for the marketing sales teams',
                    'Developed an internal ad-hoc benchmarking pipeline for developers to ensure possible performance degradation is caught at an early stage.',
                    'Utilised SonarQube for static code analysis, focusing on reducing code complexity, eliminating code smells bugs, and improving overall code maintainability'],
      skills: ['Python', 'Docker', 'AWS', 'SonarQube', 'Machine Learning'],
      image: (kxLogo as any).src
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
      image: (ossLogo as any).src
    },
    {
      role: 'Bar Supervisor',
      company: 'HAP Solutions Group',
      period: 'May 2024 – Jul 2024',
      description: ['Supervised a team of 107 bar staff at main stage at Electric Picnic \'25',
      ],
      skills: ['Bar Supervisor', 'Event Crew'],
      image: (hapLogo as any).src
    }
  ]
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Stephen Haskins' },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen scroll-smooth">
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
              Fourth year Computer Engineering student at Trinity College Dublin.
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
              <h1 className="text-5xl font-bold mb-4">About Me</h1>
              <Link href={(cvImage as any).src} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="mb-4">View CV</Button>
              </Link>
              <p className="text-xl text-gray-600 mb-6">
                I&apos;m Stephen Haskins, a fourth year Computer Engineering
                student at Trinity College Dublin. I&apos;m passionate about
                artificial intelligence and deep learning.
              </p>
              
              
              <h2 className="text-2xl font-semibold mb-3">Experience</h2>
              <div className="space-y-4 mb-6">
                {experiences.map((exp) => (
                  <Card key={`${exp.role}-${exp.company}`} className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <p className="text-gray-700">{exp.company}</p>
                        <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                        {Array.isArray(exp.description) ? (
                          <ul className="list-disc list-inside text-gray-600 mb-3">
                            {exp.description.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600 mb-3">{exp.description}</p>
                        )}
                        <h4 className="text-sm font-semibold mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((s) => (
                            <Badge key={s}>{s}</Badge>
                          ))}
                        </div>
                      </div>
                      {exp.image ? (
                        <div className="w-34 h-34 shrink-0 overflow-hidden rounded-md bg-gray-100 m-3 mr-6">
                          <Image src={exp.image as unknown as string} alt="Experience image" width={96} height={96} className="object-cover w-full h-full" />
                        </div>
                      ) : null}
                    </div>
                  </Card>
                ))}
              </div>

              <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
              <ul className="list-disc list-inside text-blue-600 mb-6">
                <li>
                  <a href="https://www.tcd.ie/computing/undergraduate/prizes/prize-winners/2023/stephen-haskins/">
                    HackTrinity Public Interest Award Winner 2024
                  </a>
                </li>
              </ul>
              
            </div>

            {/* Right side content removed */}
          </div>
        </Card>
      </div>
    </div>
  )
}
