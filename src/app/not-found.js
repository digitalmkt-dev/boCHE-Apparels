import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-[#F9F9F9] text-[#1A1A1A] px-4 pt-32 pb-20 font-body">
      <div className="max-w-md w-full bg-white border border-[#E5E5E2] rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-xs">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#FBE87E] text-[#1A1A1A] font-black text-xl shrink-0 shadow-xs mx-auto">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-headline font-black text-[#1A1A1A] tracking-tight">
            This page couldn’t be found.
          </h1>
          <p className="text-sm font-body text-[#555555] leading-relaxed">
            The page may have moved, or the link may be incorrect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1A1A1A] hover:bg-[#333333] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F9F9F9] hover:bg-[#F0F0ED] text-[#1A1A1A] border border-[#E5E5E2] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
