import Skeleton from "@/components/Skeleton";

export default function SustainabilityLoading() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen text-[#1A1A1A] pb-16">
      {/* Page Header Banner Skeleton */}
      <div className="w-full h-48 sm:h-64 bg-[#1A1A1A] p-8 flex flex-col justify-center items-center text-center space-y-4">
        <Skeleton className="w-24 h-5 bg-white/20 rounded-full" />
        <Skeleton className="w-1/2 max-w-md h-9 sm:h-11 bg-white/20 rounded-2xl" />
        <Skeleton className="w-3/4 max-w-lg h-4 bg-white/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-12">
        {/* Sustainability Grid Pillars Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E5E2] rounded-3xl p-6 space-y-4 shadow-xs"
            >
              <Skeleton className="w-12 h-12 rounded-2xl" />
              <Skeleton className="w-3/4 h-7 rounded-lg" />
              <Skeleton className="w-full h-20 rounded-lg" />
            </div>
          ))}
        </div>

        {/* Labor Standards & Ethics Skeleton */}
        <div className="bg-white border border-[#E5E5E2] rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="lg:col-span-7 space-y-4">
            <Skeleton className="w-48 h-6 rounded-full" />
            <Skeleton className="w-3/4 h-8 rounded-xl" />
            <Skeleton className="w-full h-16 rounded-xl" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Skeleton className="h-12 rounded-2xl" />
              <Skeleton className="h-12 rounded-2xl" />
              <Skeleton className="h-12 rounded-2xl" />
              <Skeleton className="h-12 rounded-2xl" />
            </div>
          </div>
          <div className="lg:col-span-5 h-72 rounded-2xl">
            <Skeleton className="w-full h-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
