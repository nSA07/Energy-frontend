import type { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { LoaderCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
    const { session, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoaderCircle />
            </div>
        );
    }
    
    if (!session) {
        return null;
    }

    return <>{children}</>;
}