"use client";

import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-[#f2f2f2be]">
        <SidebarProvider>
          <AdminSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-300 bg-[#F2F2F2] backdrop-blur-md px-4 shadow-lg">
              <SidebarTrigger className="-ml-1 text-[#1E201E] hover:text-[#1E201E] hover:bg-[#B6B09F]/20 rounded-md p-2 transition-all" />
              <Separator
                orientation="vertical"
                className="mr-2 h-4 bg-gray-300"
              />
              <h1 className="text-xl font-semibold text-[#1E201E] tracking-wide">
                🎬 Cinema Admin Dashboard
              </h1>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-6 bg-[#F2F2F2]">
              {children}
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </ThemeProvider>
  );
}
