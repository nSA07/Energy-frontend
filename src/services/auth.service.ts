import { removeToken, setToken } from "./auth-token.service";
import type { RegisterForm } from "@/types/types";
import { publicInstance } from "@/api/axios.api";

export const authService = {
    async login(data: { email: string; password: string }) {
        
        const res = await publicInstance.post(`/auth/login`, data);
        
        if(res.data.token) setToken(res.data.token);

        return res
    },

    async register(data: RegisterForm) {
        
        const res = await publicInstance.post(`/auth/register`, data);
        
        if(res.data.token) setToken(res.data.token);

        return res
    },

    async logout() {
        removeToken()
    },
}

