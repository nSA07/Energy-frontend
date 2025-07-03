import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { getToken } from '@/services/auth-token.service';
import { toast } from 'sonner';

export const useGuestRedirect = () => {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const checkAuth = async () => {
      const token = getToken();

      if (token) {
        toast.success('Ви вже авторизовані');
        navigate('/i', { replace: true })
        return;
      }

      setIsChecking(false);
    };

    checkAuth();
  }, [navigate, queryClient]);

  return { isChecking };
};
