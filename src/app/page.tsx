import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-zinc-50 container mx-auto px-10 py-16 flex flex-col md:flex-row items-center justify-between">
      {/* Buttons */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-4">Stephen Haskins</h1>
        <p className="text-xl text-gray-600 mb-6">
          Fourth year computer engineering student at Trinity College Dublin.
        </p>
        <div className="space-x-4">
          <Button className="bg-[#14171f] text-white">View Projects</Button>
          <Button variant="outline">About Me</Button>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
        <Image
          src="/headshot.jpeg"
          alt="Headshot"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
    </div>
  )
}