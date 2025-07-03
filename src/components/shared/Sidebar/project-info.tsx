import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { Command, LoaderCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export const ProjectInfo: React.FC = () => {

    const { data: profile, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: () => userService.getProfile(),
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoaderCircle />
            </div>
        );
    }

    return (
        <Link
            to="/i"
            className="flex gap-2 items-center justify-center"
        >
            <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <Command className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{profile?.workspaces.workspaceName}</span>
                <span className="truncate text-xs">{profile?.workspaces.workspaceAddress}</span>
            </div>
        </Link>
    );
};