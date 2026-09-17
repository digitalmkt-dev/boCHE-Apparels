import Skeleton from "@/components/Skeleton";

export default function ClientsLoading() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen text-[#1A1A1A] pb-20 font-body">
      {/* Page Header Banner Skeleton */}
      <div className="w-full h-48 sm:h-64 bg-[#1A1A1A] p-8 flex flex-col justify-center items-center text-center space-y-4">
        <Skeleton className="w-24 h-5 bg-white/20 rounded-full" />
        <Skeleton className="w-1/2 max-w-md h-9 sm:h-11 bg-white/20 rounded-2xl" />
        <Skeleton className="w-3/4 max-w-lg h-4 bg-white/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-12">
        {/* Section 1: International Brands Skeleton */}
        <div className="space-y-8">
          <div className="border-b border-[#E5E5E2] pb-4 space-y-2">
            <Skeleton className="w-32 h-4 rounded-full" />
            <Skeleton className="w-64 h-8 rounded-xl" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white border border-[#E5E5E2] rounded-2xl p-6 flex items-center justify-center min-h-[140px] sm:min-h-[160px]"
              >
                <Skeleton className="w-28 sm:w-36 h-12 rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Domestic Brands Skeleton */}
        <div className="space-y-8">
          <div className="border-b border-[#E5E5E2] pb-4 space-y-2">
            <Skeleton className="w-32 h-4 rounded-full" />
            <Skeleton className="w-64 h-8 rounded-xl" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white border border-[#E5E5E2] rounded-2xl p-6 flex items-center justify-center min-h-[140px] sm:min-h-[160px]"
              >
                <Skeleton className="w-28 sm:w-36 h-12 rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner Skeleton */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 sm:p-12 flex flex-col justify-center items-center text-center space-y-6">
          <Skeleton className="w-3/4 max-w-xl h-8 sm:h-10 bg-white/20 rounded-2xl" />
          <Skeleton className="w-2/3 max-w-md h-4 bg-white/10 rounded-full" />
          <Skeleton className="w-48 h-12 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
