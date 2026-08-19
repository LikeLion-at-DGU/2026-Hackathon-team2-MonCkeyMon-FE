import { axiosInstance } from "./axiosInstance";

export const getShare = (sessionId) => axiosInstance.get(`/api/share/${sessionId}/`);
