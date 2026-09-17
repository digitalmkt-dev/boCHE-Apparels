import Skeleton from "@/components/Skeleton";

export default function AboutLoading() {
  return (
    <div className="w-full space-y-16 py-8 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Page Banner Skeleton */}
      <div className="w-full h-48 sm:h-64 rounded-3xl bg-[#1A1A1A]/90 p-8 flex flex-col justify-center space-y-4">
        <Skeleton className="w-32 h-6 bg-white/20 rounded-full" />
        <Skeleton className="w-2/3 h-10 sm:h-12 bg-white/20 rounded-2xl" />
      </div>

      {/* Intro Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6">
          <Skeleton className="w-24 h-5 rounded-full" />
          <Skeleton className="w-full h-10 rounded-2xl" />
          <Skeleton className="w-4/5 h-10 rounded-2xl" />
          <Skeleton className="w-full h-24 rounded-2xl" />
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Skeleton className="h-16 rounded-2xl" />
            <Skeleton className="h-16 rounded-2xl" />
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center">
          <Skeleton className="w-72 h-96 rounded-3xl" />
        </div>
      </div>

      {/* Stats Counter Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-28 rounded-2xl" />
        ))}
      </div>

      {/* Group Legacy Skeleton */}
      <div className="w-full h-80 rounded-3xl bg-white border border-[#E5E5E2] p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-4">
          <Skeleton className="w-28 h-6 rounded-full" />
          <Skeleton className="w-full h-8 rounded-xl" />
          <Skeleton className="w-full h-32 rounded-xl" />
        </div>
        <div className="lg:col-span-5 flex justify-center items-center">
          <Skeleton className="w-full h-60 rounded-2xl bg-[#1A1A1A]/80" />
        </div>
      </div>
    </div>
  );
}
