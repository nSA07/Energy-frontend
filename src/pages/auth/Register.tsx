import React from "react";
import { RegisterForm } from "./components/RegisterForm";
import { Link } from "react-router";
import { GalleryVerticalEnd } from "lucide-react";

export const Register: React.FC = () => {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-md">
                        <GalleryVerticalEnd className="size-6" />
                    </div>
                    <span className="sr-only">Acme Inc.</span>
                    <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
                    <div className="text-center text-sm">
                        Do you have accaunt?{" "}
                        <Link to='/auth/login' className="underline underline-offset-4">
                            Sign in
                        </Link>
                    </div>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
};