import * as React from "react"
import {
  Command,
  Inbox,
  LifeBuoy,
  Search,
  Send,
  Settings,
} from "lucide-react"

// import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
// import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { UpgradeCard } from "./upgrade-card"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import { Link } from "react-router"
import { ProjectInfo } from "./project-info"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://ui.shadcn.com/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="p-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <ProjectInfo />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={data.navMain} />
        <NavMain />
        {/* <NavProjects workspaces={workspaces} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter className="p-0">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
