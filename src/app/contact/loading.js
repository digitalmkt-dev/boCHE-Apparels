import Skeleton from "@/components/Skeleton";

export default function ContactLoading() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen text-[#1A1A1A] pb-16">
      {/* Page Header Banner Skeleton */}
      <div className="w-full h-48 sm:h-64 bg-[#1A1A1A] p-8 flex flex-col justify-center items-center text-center space-y-4">
        <Skeleton className="w-28 h-5 bg-white/20 rounded-full" />
        <Skeleton className="w-1/2 max-w-md h-9 sm:h-11 bg-white/20 rounded-2xl" />
        <Skeleton className="w-3/4 max-w-lg h-4 bg-white/10 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Info Card */}
            <div className="bg-white border border-[#E5E5E2] rounded-3xl p-7 space-y-6 shadow-xs">
              <Skeleton className="w-64 h-6 rounded-lg" />
              <div className="space-y-5">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Skeleton className="w-10 h-10 rounded-xl shrink-0" />
                    <div className="space-y-2 w-full">
                      <Skeleton className="w-28 h-4 rounded-md" />
                      <Skeleton className="w-full h-4 rounded-md" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Container Card */}
            <div className="bg-white border border-[#E5E5E2] rounded-3xl p-4 space-y-3 shadow-xs">
              <div className="flex justify-between items-center px-2">
                <Skeleton className="w-40 h-4 rounded-md" />
                <Skeleton className="w-20 h-5 rounded-md" />
              </div>
              <Skeleton className="w-full h-60 rounded-2xl" />
            </div>
          </div>

          {/* Right Column Form Skeleton */}
          <div className="lg:col-span-7 bg-white border border-[#E5E5E2] rounded-3xl p-8 space-y-6 shadow-xs">
            <div className="space-y-2">
              <Skeleton className="w-48 h-7 rounded-lg" />
              <Skeleton className="w-3/4 h-4 rounded-md" />
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Skeleton className="h-11 rounded-xl" />
                <Skeleton className="h-11 rounded-xl" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Skeleton className="h-11 rounded-xl" />
                <Skeleton className="h-11 rounded-xl" />
              </div>

              <Skeleton className="h-11 rounded-xl" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Skeleton className="h-11 rounded-xl" />
                <Skeleton className="h-11 rounded-xl" />
              </div>

              <Skeleton className="h-28 rounded-xl" />

              <Skeleton className="w-full h-12 rounded-full bg-[#1A1A1A]/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
