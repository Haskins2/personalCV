import { PhotoGridSkeleton } from "@/components/Skeleton"

export default function PhotographyLoading() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-10 py-8">
        {/* Breadcrumb skeleton */}
        <div className="mb-6">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-16 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-4 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
          </div>
        </div>

        {/* Title skeleton */}
        <div className="h-10 w-32 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse mb-4" />

        {/* Photo grid skeleton */}
        <PhotoGridSkeleton />
      </div>
    </div>
  )
}
