"use client"

import * as React from "react"
import Image from "next/image"

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface PhotographyCarouselProps {
  photos: string[]
}

export function PhotographyCarousel({ photos }: PhotographyCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const updateCurrent = () => setCurrent(api.selectedScrollSnap())
    updateCurrent()
    api.on("select", updateCurrent)

    const interval = window.setInterval(() => api.scrollNext(), 5000)

    return () => {
      window.clearInterval(interval)
      api.off("select", updateCurrent)
    }
  }, [api])

  if (photos.length === 0) return null

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      className="mx-auto w-full max-w-4xl"
      aria-label="Photography gallery"
    >
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={photo}>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-zinc-200 shadow-lg dark:bg-zinc-800">
              <Image
                src={photo}
                alt={`Stephen Haskins photograph ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 border-white/70 bg-black/50 text-white hover:bg-black/70 hover:text-white disabled:hidden" />
      <CarouselNext className="right-3 border-white/70 bg-black/50 text-white hover:bg-black/70 hover:text-white disabled:hidden" />
      <div
        className="mt-4 flex justify-center gap-2"
        aria-label={`Photo ${current + 1} of ${photos.length}`}
      >
        {photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-6 bg-zinc-900 dark:bg-white"
                : "w-2 bg-zinc-400 hover:bg-zinc-600 dark:bg-zinc-600 dark:hover:bg-zinc-400"
            }`}
            aria-label={`Go to photo ${index + 1}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </Carousel>
  )
}
