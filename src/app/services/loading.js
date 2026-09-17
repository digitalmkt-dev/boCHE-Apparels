import Skeleton from "@/components/Skeleton";

export default function ServicesLoading() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen text-[#1A1A1A] pb-20">
      {/* Page Header Banner Skeleton */}
      <div className="w-full h-48 sm:h-64 bg-[#1A1A1A] p-8 flex flex-col justify-center items-center text-center space-y-4">
        <Skeleton className="w-32 h-5 bg-white/20 rounded-full" />
        <Skeleton className="w-3/4 max-w-lg h-9 sm:h-11 bg-white/20 rounded-2xl" />
        <Skeleton className="w-5/6 max-w-xl h-4 bg-white/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pt-12">
        {/* Responsive 3-Column Services Facility Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E5E2] rounded-[24px] p-5 space-y-4 shadow-xs"
            >
              {/* Facility Image Container Skeleton */}
              <Skeleton className="w-full aspect-[16/10] rounded-[18px]" />

              {/* Badge Skeleton */}
              <Skeleton className="w-36 h-5 rounded-full bg-[#FBE87E]/40" />

              {/* Title Skeleton */}
              <Skeleton className="w-4/5 h-7 rounded-lg" />

              {/* Short Description Skeleton */}
              <div className="space-y-2">
                <Skeleton className="w-full h-4 rounded-md" />
                <Skeleton className="w-3/4 h-4 rounded-md" />
              </div>

              {/* Checkmark List Skeleton */}
              <div className="space-y-2.5 pt-2 border-t border-[#F0F0EE]">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Skeleton className="w-4 h-4 rounded-full shrink-0" />
                    <Skeleton className="w-5/6 h-4 rounded-md" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
