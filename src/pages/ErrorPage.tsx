import React from "react";
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
}

export const ErrorPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className)}>ErrorPage</div>
  );
};