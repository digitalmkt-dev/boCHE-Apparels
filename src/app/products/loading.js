import Skeleton from "@/components/Skeleton";

export default function ProductsLoading() {
  return (
    <div className="w-full space-y-12 py-8 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Banner Skeleton */}
      <div className="w-full h-48 sm:h-60 rounded-3xl bg-[#1A1A1A]/90 p-8 flex flex-col justify-center space-y-4">
        <Skeleton className="w-36 h-6 bg-white/20 rounded-full" />
        <Skeleton className="w-1/2 h-10 sm:h-12 bg-white/20 rounded-2xl" />
      </div>

      {/* Category Tabs Skeleton */}
      <div className="flex flex-wrap justify-center gap-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="w-28 sm:w-36 h-10 rounded-full" />
        ))}
      </div>

      {/* Product Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-white border border-[#E5E5E2] rounded-3xl p-4 space-y-4 shadow-xs">
            <Skeleton className="w-full aspect-[4/5] rounded-2xl" />
            <Skeleton className="w-3/4 h-6 rounded-lg" />
            <div className="flex justify-between items-center pt-2">
              <Skeleton className="w-20 h-5 rounded-full" />
              <Skeleton className="w-16 h-5 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
