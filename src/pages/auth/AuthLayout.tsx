import React from "react";
import { Outlet } from "react-router";
import { useGuestRedirect } from "@/hooks/useGuestRedirect";
import { LoaderCircle } from 'lucide-react';

export const AuthLayout: React.FC = () => {
    const { isChecking } = useGuestRedirect();

    if (isChecking) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoaderCircle />
            </div>
        );
    }
    return (
        <>
            <Outlet />
        </>
    );
};