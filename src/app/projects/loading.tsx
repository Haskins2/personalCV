import { ProjectCardSkeleton } from "@/components/Skeleton"

export default function ProjectsLoading() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb skeleton */}
        <div className="mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-16 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-4 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
          </div>
        </div>

        {/* Title skeleton */}
        <div className="mb-8">
          <div className="h-10 w-48 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse mb-3" />
          <div className="h-6 w-96 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
        </div>

        {/* Projects grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
