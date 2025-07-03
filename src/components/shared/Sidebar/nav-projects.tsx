'use client'
import { useState } from "react"
import { CircleGauge, MoreHorizontal, Plus, SquarePen, Trash2 } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"

export function NavProjects({
  workspaces,
}: {
  workspaces: {
    id: string
    workspaceName: string
    workspaceAddress: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [open, setOpen] = useState(false)

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Дошки</SidebarGroupLabel>
      <SidebarMenu>
        {workspaces?.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton asChild>
              <a className="flex gap-2" href={item.id}>
                <CircleGauge />
                <span>{item.workspaceName}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction className="cursor-pointer" showOnHover>
                  <MoreHorizontal />
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem className="p-0">
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 has-[>svg]:p-1 cursor-pointer"
                    asChild
                  >
                    <Link onClick={() => setOpen(false)} to={`/i/workspace/${item.id}/edit`}>
                      <SquarePen className="text-muted-foreground" />
                      <span>Змінити</span>
                    </Link>
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-0">
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 has-[>svg]:p-1 cursor-pointer"
                  >
                    <Trash2 className="text-muted-foreground" />
                    <span>Видалити</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="cursor-pointer">
            <Link to="/i/workspace/create">
              <Plus />
              <span>Створити простір</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
