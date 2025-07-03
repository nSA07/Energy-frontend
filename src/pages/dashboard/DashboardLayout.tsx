import { AppSidebar } from "@/components/shared/Sidebar/app-sidebar";
import { SiteHeader } from "@/components/shared/Sidebar/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router";
import { Toaster } from "sonner";

export const DashboardLayout = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SiteHeader />
          <div className="h-full p-2">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </>
  )
}
