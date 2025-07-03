import { ProtectedRoute } from "@/components/shared/ProtectedRoute";
import { AuthLayout } from "@/pages/auth/AuthLayout";
import { Login } from "@/pages/auth/Login";
import { Register } from "@/pages/auth/Register";
import { Boards } from "@/pages/dashboard/boards/Boards";
import { Controllers } from "@/pages/dashboard/Controllers";
import { Counters } from "@/pages/dashboard/Counters";
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout";
import { DateDownload } from "@/pages/dashboard/DataDownload";
import { ErrorPage } from "@/pages/ErrorPage";
import { createBrowserRouter, Navigate } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/i" replace />
    },
    {
        path: '/i',
        errorElement: <ErrorPage />,
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: <Boards />
            },
            {
                path: 'controllers',
                element: <Controllers />
            },
            {
                path: 'counters',
                element: <Counters />
            },
            {
                path: 'data',
                element: <DateDownload />
            }
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])