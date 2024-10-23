import { File } from "@/lib/types";

const serverUrl = process.env.VAULT_SERVER_URL!;

export const handleGetFile = async (fileKey: string) => {
    const response = await fetch(`https://vault-drop-server.onrender.com/folders/files/file/${fileKey}`);

    if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    const data = await response.json() as File;
    return data;
};