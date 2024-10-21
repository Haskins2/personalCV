import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"

export default function About() {
  return (
    <div className="bg-zinc-50 container mx-auto px-10 py-8 min-h-screen flex flex-col">
      <Breadcrumb className="mb-6" />
      
      <Card className="flex-grow p-6 shadow-lg">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left side content */}
          <div className="md:auto mb-8 md:mb-0 pr-8">
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-600 mb-6">
              I'm Stephen Haskins, a fourth year Computer Engineering student at Trinity College Dublin. 
              I'm passionate about technology and ...
            </p>
            <h2 className="text-2xl font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge>React</Badge>
              <Badge>NextJS</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Python</Badge>
              <Badge>Machine Learning</Badge>
            </div>
            <h2 className="text-2xl font-semibold mb-3">Interests</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Web Development</li>
              <li>Artificial Intelligence</li>
              <li>Machine Learning</li>
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
                I'm currently working on a machine learning project ...
              </p>
              <Button className="bg-[#14171f] text-white">Learn More</Button>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  )
}
