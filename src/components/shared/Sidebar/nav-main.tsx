import React from "react";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { CircleGauge, Router, PcCase, Database } from "lucide-react";
import { NavLink } from "react-router";

interface Props {
  className?: string;
}

export const NavMain: React.FC<Props> = () => {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton className="cursor-pointer">
            <NavLink to={'/i'} className="flex gap-2">
              <CircleGauge />
              <span>Дошки</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton className="cursor-pointer">
            <NavLink to={'/i/counters'} className="flex gap-2">
              <Router />
              <span>Лічільники</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton className="cursor-pointer">
            <NavLink to={'/i/controllers'} className="flex gap-2">
              <PcCase />
              <span>Пристрої</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <NavLink to={'/i/data'} className="flex gap-2">
              <Database />
              <span>Дані</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};