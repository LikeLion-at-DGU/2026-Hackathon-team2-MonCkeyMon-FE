import { axiosInstance } from "./axiosInstance";

export const getBackgrounds = () => axiosInstance.get("/backgrounds/");