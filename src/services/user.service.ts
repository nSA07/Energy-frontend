import { privateInstance } from "@/api/axios.api";

export const userService = {
    async getProfile() {
        const res = await privateInstance.get('/user/profile');
        
        return res.data;
    }
}