import { HeroSkeleton, CardSkeleton } from "@/components/Skeleton"

export default function Loading() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen scroll-smooth">
      <div className="container mx-auto px-10 py-8 flex flex-col min-h-screen">
        {/* Breadcrumb skeleton */}
        <div className="mt-auto mb-6">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-16 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-4 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
          </div>
        </div>

        {/* Hero section skeleton */}
        <HeroSkeleton />

        {/* About section skeleton */}
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div className="h-12 w-32 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-10 w-24 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
          </div>
          
          <div className="space-y-6">
            <div className="h-6 w-full bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            
            {/* Education skeleton */}
            <div className="space-y-4">
              <div className="h-8 w-32 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
              <CardSkeleton />
            </div>
            
            {/* Experience skeleton */}
            <div className="space-y-4">
              <div className="h-8 w-32 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="border border-gray-200 dark:border-zinc-700 rounded-lg p-4">
                    <CardSkeleton />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
