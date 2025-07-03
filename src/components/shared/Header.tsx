import React from "react";
import { cn } from '@/lib/utils';
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Link } from "react-router";
import { RegisterForm } from "@/pages/auth/components/RegisterForm";
import { GalleryVerticalEnd } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className="border-b p-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GalleryVerticalEnd className="size-6" />
          <h1 className="text-2xl font-bold">Acme Inc.</h1>
        </div>
        <div className="flex items-center gap-2">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="cursor-pointer">Безкоштовна реєстрація</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[600px] w-full">
                    <DialogHeader>
                        <DialogTitle>Спробувати безкоштовно</DialogTitle>
                    </DialogHeader>
                    <RegisterForm />
                </DialogContent>
            </Dialog>
            <Button variant="outline" className="mr-2 cursor-pointer" asChild>
                <Link to='/auth'>Увійти</Link>
            </Button>
        </div>
    </header>
  );
};