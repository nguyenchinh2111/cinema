"use client";

import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AdminSidebar } from "./AdminSidebar";
import { Separator } from "@/components/ui/separator";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800">
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-500 bg-white backdrop-blur-md px-4 shadow-lg">
            <SidebarTrigger className="-ml-1 text-slate-700 hover:text-slate-200 hover:bg-amber-900/20 rounded-md p-2 transition-all" />
            <Separator
              orientation="vertical"
              className="mr-2 h-4 bg-slate-700"
            />
            <h1 className="text-xl font-semibold text-slate-700 tracking-wide">
              🎬 Cinema Admin Dashboard
            </h1>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-6 bg-gradient-to-b from-gray-900/20 to-slate-900">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
