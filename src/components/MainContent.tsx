
import React from "react";
import { useSidebar } from "@/components/ui/sidebar";

interface MainContentProps {
  children: React.ReactNode;
}

export function MainContent({ children }: MainContentProps) {
  const { state, isMobile } = useSidebar();
  
  // On mobile, always use ml-0. On desktop, use ml-[380px] when expanded, ml-0 when collapsed
  const marginClass = isMobile 
    ? "ml-0" 
    : state === "expanded" 
      ? "ml-[380px]" 
      : "ml-0";

  return (
    <main className={`pt-16 px-6 transition-all duration-300 ease-in-out ${marginClass}`}>
      <div className="max-w-4xl mx-auto py-6">
        {children}
      </div>
    </main>
  );
}
