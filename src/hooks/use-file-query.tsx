import { handleGetFile } from "@/actions";
import { useQuery } from "@tanstack/react-query";

export const useGetFile = (fileKey: string) => {    

    return useQuery({
        queryKey: [`file-${fileKey}`],
        queryFn: () => handleGetFile(fileKey)
    });
};
