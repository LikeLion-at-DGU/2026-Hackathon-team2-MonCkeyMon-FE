import { axiosInstance } from "./axiosInstance";

export const getProductSession = () =>
    axiosInstance.get("/api/analytics/product-session/");

export const getCategoryTop5 = () =>
    axiosInstance.get("/api/analytics/category-session/top5/");

export const getChooseCountTop5 = () =>
    axiosInstance.get("/api/analytics/choose-count/top5/");

export const getVisitorCount = () =>
    axiosInstance.get("/api/analytics/visitor-count/");

export const getDailyVisitorCount = () =>
    axiosInstance.get("/api/analytics/visitor-count/daily/");

export const getProductSessionFiltered = (params) =>
    axiosInstance.get("/api/analytics/product-session/", { params });

export const getProductInterest = () =>
    axiosInstance.get("/api/analytics/product-interest/");