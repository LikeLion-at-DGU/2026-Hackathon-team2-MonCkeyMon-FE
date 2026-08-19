import { axiosInstance } from "./axiosInstance";

export const createExperience = () =>
    axiosInstance.post("/api/experiences/");

export const selectBackground = (sessionId, backgroundId) =>
    axiosInstance.patch(`/api/experiences/${sessionId}/`, {
        background_id: backgroundId,
    });

export const uploadPhoto = (sessionId, formData) =>
    axiosInstance.post(`/api/experiences/${sessionId}/upload-photo/`, formData);

export const selectProduct = (sessionId, productId) =>
    axiosInstance.patch(`/api/experiences/${sessionId}/`, {
        product_id: productId,
    });

export const receiveLink = (sessionId) =>
    axiosInstance.post(`/api/experiences/${sessionId}/link/`);
