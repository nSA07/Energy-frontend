import { privateInstance } from "@/api/axios.api";
import type { WorkspaceFormValues } from "@/types/types";


export const workSpaceService = {

    async getWorkSpaceById(id: string) {
        const res = await privateInstance.get(`/workspace/${id}`);
        return res.data;        
    },

    async getWorkSpaces() {
        const res = await privateInstance.get(`/workspace`);
        return res.data;        
    },

    async createWorkSpace(data: WorkspaceFormValues) {
        const res = await privateInstance.post(`/workspace`, data);
        return res.data;
    },

    async deleteWorkSpace(id: string) {
        const res = await privateInstance.delete(`/workspace/${id}`);
        return res.data;
    },

    async updateWorkSpace(id: string, data: WorkspaceFormValues) {
        const res = await privateInstance.patch(`/workspace/${id}`, data);
        return res.data;
    },
}