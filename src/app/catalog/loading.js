import Skeleton from "@/components/Skeleton";

export default function CatalogLoading() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen text-[#1A1A1A] pb-16">
      {/* Page Header Banner Skeleton */}
      <div className="w-full h-48 sm:h-64 bg-[#1A1A1A] p-8 flex flex-col justify-center items-center text-center space-y-4">
        <Skeleton className="w-28 h-5 bg-white/20 rounded-full" />
        <Skeleton className="w-2/3 max-w-md h-9 sm:h-11 bg-white/20 rounded-2xl" />
        <Skeleton className="w-4/5 max-w-lg h-4 bg-white/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-10">
        {/* Search & Filter Header Skeleton */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-[#E5E5E2] pb-6">
          <Skeleton className="w-48 h-8 rounded-xl" />
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Skeleton className="w-full sm:w-64 h-10 rounded-xl" />
            <Skeleton className="w-24 h-10 rounded-xl shrink-0" />
          </div>
        </div>

        {/* Category Filter Pills Skeleton */}
        <div className="flex flex-wrap gap-2.5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="w-28 sm:w-32 h-9 rounded-full" />
          ))}
        </div>

        {/* Catalog Cards Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E5E2] rounded-3xl p-4 space-y-4 shadow-xs"
            >
              <Skeleton className="w-full aspect-[4/5] rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="w-20 h-4 rounded-full" />
                <Skeleton className="w-5/6 h-6 rounded-lg" />
                <Skeleton className="w-full h-8 rounded-xl bg-[#F5F5F3]" />
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-[#F0F0EE]">
                <Skeleton className="w-24 h-5 rounded-md" />
                <Skeleton className="w-20 h-8 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
