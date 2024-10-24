import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function About() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="container mx-auto px-10 py-8 min-h-screen flex flex-col">
        <div className="mb-6">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
          />
        </div>

        <Card className="flex-grow p-6 shadow-lg">
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Left side content */}
            <div className="md:auto mb-8 md:mb-0 pr-8">
              <h1 className="text-5xl font-bold mb-4">About Me</h1>
              <p className="text-xl text-gray-600 mb-6">
                I&apos;m Stephen Haskins, a fourth year Computer Engineering
                student at Trinity College Dublin. I&apos;m passionate about
                artificial intelligence and deep learning.
              </p>
              <h2 className="text-2xl font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge>Python</Badge>
                <Badge>C#/C++</Badge>
                <Badge>Assembly</Badge>
                <Badge>SQL</Badge>
                <Badge>Matlab</Badge>
                <Badge>Docker</Badge>
                <Badge>AWS</Badge>
                <Badge>Azure</Badge>

              </div>
              <h2 className="text-2xl font-semibold mb-3">Interests</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Web Development</li>
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
              <ul className="list-disc list-inside text-blue-600 mb-6">
                <li>
                  <a href="https://www.tcd.ie/computing/undergraduate/prizes/prize-winners/2023/stephen-haskins/">
                    HackTrinity Public Interest Award Winner 2024
                  </a>
                </li>
              </ul>
            </div>

            {/* Right side content */}
            <div className="md:w-1/3">
              <Image
                src="/headshot.jpeg"
                alt="picture"
                width={600}
                height={400}
                className="rounded-lg object-cover mb-6"
              />
              <Card className="p-4 bg-gray-100">
                <h3 className="text-xl font-semibold mb-2">Current Project</h3>
                <p className="text-gray-600 mb-4">
                  See what I&apos;m currently working on</a>.
                </p>
                <Button className="bg-[#14171f] text-white">Learn More</Button>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
