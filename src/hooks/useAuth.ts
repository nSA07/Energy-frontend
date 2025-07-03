import { useQuery } from '@tanstack/react-query';
import { userService } from '@/services/user.service';
import { getToken, removeToken } from '@/services/auth-token.service';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'sonner';

export const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = getToken();

  const { data: session, isLoading } = useQuery({
    queryKey: ['auth', 'session'],
    queryFn: async () => {
      if (!token) navigate('/auth/login', { replace: true, state: { from: location } });
      try {
        const user = await userService.getProfile();
        return user;
      } catch (error: any) {
        if (error.response?.status === 401 || error.status === 401) {
          removeToken()
          toast.error('Сесія завершена, увійдіть повторно');
          navigate('/auth/login', { replace: true, state: { from: location } });
        }
        throw error;
      }
    },
  });

  return {
    session,
    isLoading
  };
};
