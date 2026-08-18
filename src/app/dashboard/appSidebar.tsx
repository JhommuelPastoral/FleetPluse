"use client"

import * as React from "react"
import {
  Bell,
  CarFront,
  ChartNoAxesCombined,
  Fuel,
  LayoutDashboard,
  MapPinned,
  Settings2,
  ShieldAlert,
  Truck,
  Users,
  Wrench,
  VectorSquare
} from "lucide-react"

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
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Jhommuel Pastoral",
    email: "admin@haulvia.com",
    avatar: "/avatars/default.jpg",
  },

  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Live Operations",
      url: "/dashboard/operations",
      icon: MapPinned,
    },
    {
      title: "Fleet",
      url: "/dashboard/fleet",
      icon: Truck,
    },
    {
      title: "Drivers",
      url: "/dashboard/drivers",
      icon: Users,
    },
    {
      title: "Maintenance",
      url: "/dashboard/maintenance",
      icon: Wrench,
    },
    {
      title: "Fuel",
      url: "/dashboard/fuel",
      icon: Fuel,
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: ChartNoAxesCombined,
    },
  ],

  management: [
    {
      title: "Alerts",
      url: "/dashboard/alerts",
      icon: ShieldAlert,
    },
    {
      title: "Notifications",
      url: "/dashboard/notifications",
      icon: Bell,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
    },
  ],
}

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Header */}
      <SidebarHeader >
        <div className="flex items-center gap-2 px-2">
          <VectorSquare size={24} />
          <div className="flex flex-col  group-data-[state=collapsed]:hidden">
            <span className="truncate font-bold text-base">
              Haulvia
            </span>
            <span className="truncate text-xs text-muted-foreground">
              Fleet Intelligence
            </span>
          </div>
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Operations</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {data.management.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="hover:bg-muted"
              asChild
            >
              <a href="/dashboard/settings">
                <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-muted">
                  <CarFront className="size-4" />
                </div>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {data.user.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    {data.user.email}
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}