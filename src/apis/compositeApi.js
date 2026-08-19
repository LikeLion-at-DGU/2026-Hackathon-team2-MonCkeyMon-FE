import { axiosInstance } from "./axiosInstance";

export const createComposite = (sessionId) =>
    axiosInstance.post(`/api/composite/${sessionId}/`);
