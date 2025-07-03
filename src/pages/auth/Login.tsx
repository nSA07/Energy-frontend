import React from "react";
import { AuthForm } from "./components/AuthForm";

export const Login: React.FC = () => {

  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AuthForm />
      </div>
    </div>
  );
};