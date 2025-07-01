"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Home,
  Film,
  Users,
  Calendar,
  BarChart3,
  Armchair,
  Settings,
  Ticket,
  MessageSquare,
  UserCog,
} from "lucide-react";

const adminMenuItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Movies",
    url: "/admin/movies",
    icon: Film,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Rooms",
    url: "/admin/rooms",
    icon: Armchair
  },
  {
    title: "Bookings",
    url: "/admin/bookings",
    icon: Ticket,
  },
  {
    title: "Showtimes",
    url: "/admin/showtimes",
    icon: Calendar,
  },
  {
    title: "Reviews",
    url: "/admin/reviews",
    icon: MessageSquare,
  },
];

const analyticsItems = [
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Reports",
    url: "/admin/reports",
    icon: BarChart3,
  },
];

const systemItems = [
  {
    title: "Staff Management",
    url: "/admin/staff",
    icon: UserCog,
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  return (
    <Sidebar className="bg-[#F2F2F2] border-gray-300">
      <SidebarHeader className="border-b border-gray-300 bg-[#F2F2F2]">
        <div className="flex items-center gap-2 px-2 py-2">
          <Film className="h-6 w-6 text-[#B6B09F]" />
          <span className="font-semibold text-lg text-[#1E201E]">
            🎬 Cinema Admin
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-[#F2F2F2]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#1E201E] font-bold text-[20px]">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-[#1E201E] hover:text-[#1E201E] hover:bg-[#B6B09F]"
                  >
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#1E201E] font-bold text-[20px]">
            Analytics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-[#1E201E] hover:text-[#1E201E] hover:bg-[#B6B09F]"
                  >
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#1E201E] font-bold text-[20px]">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-[#1E201E] hover:text-[#1E201E] hover:bg-[#B6B09F]"
                  >
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-300 bg-[#F2F2F2]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-[#1E201E] hover:text-[#1E201E] hover:bg-[#B6B09F]">
              <Settings className="h-4 w-4" />
              <span>Admin Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
