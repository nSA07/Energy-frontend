import { workSpaceService } from "@/services/workspace.service";
import { useQuery } from "@tanstack/react-query";

export const useWorkSpacesById = (id: string, enabled: boolean) => {
    const { data: workspace, isLoading, isFetching, isSuccess, isFetched } = useQuery({
        queryKey: ["workspace.by-id", id],
        queryFn: () => workSpaceService.getWorkSpaceById(id),
        enabled,
    })
    
    return {
        workspace,
        isLoading,
        isFetching,
        isSuccess,
        isFetched,
    }
}