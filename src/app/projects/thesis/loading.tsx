import { ProjectDetailSkeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-4 w-16 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-4 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
            <div className="h-4 w-24 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse" />
          </div>
        </div>
        <ProjectDetailSkeleton />
      </div>
    </div>
  );
}
