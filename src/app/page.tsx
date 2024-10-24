import { Button } from "@/components/ui/button"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import Link from "next/link"

export default function Home() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Stephen Haskins' },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen">
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
              <Link href="/about">
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
    </div>
  )
}
