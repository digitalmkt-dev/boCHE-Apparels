"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import FloatingActions from "@/components/FloatingActions";

export default function ClientLayoutWrapper({ children }) {
  const router = useRouter();

  const openQuoteModal = () => {
    router.push("/contact#enquiry-form");
  };

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-[#F9F9F9] text-[#1A1A1A] selection:bg-[#FBE87E] selection:text-[#1A1A1A]">
        <Header onOpenQuoteModal={openQuoteModal} />
        <main className="flex-1">
          {typeof children === "function" ? children({ openQuoteModal }) : children}
        </main>
        <Footer onOpenQuoteModal={openQuoteModal} />
        <FloatingActions />
      </div>
    </SmoothScrollProvider>
  );
}
