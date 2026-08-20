import { axiosInstance } from "./axiosInstance";

export const getProducts = () => axiosInstance.get("/api/products/");

export const clickProductLink = (productId) =>
    axiosInstance.post(`/api/products/${productId}/like/`);
