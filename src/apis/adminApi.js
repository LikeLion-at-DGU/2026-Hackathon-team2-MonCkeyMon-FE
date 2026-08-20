import { axiosInstance } from "./axiosInstance";

export const getProductSession = () =>
    axiosInstance.get("/api/analytics/product-session/");

export const getCategoryTop5 = () =>
    axiosInstance.get("/api/analytics/category-session/top5/");

export const getTodayCategoryTop5 = () =>
    axiosInstance.get("/api/analytics/category-session/top5/", { params: { period: "today" } });

export const getChooseCountTop5 = () =>
    axiosInstance.get("/api/analytics/choose-count/top5/");

export const getTodayChooseCountTop5 = () =>
    axiosInstance.get("/api/analytics/choose-count/top5/", { params: { period: "today" } });

export const getVisitorCount = () =>
    axiosInstance.get("/api/analytics/visitor-count/");

export const getDailyVisitorCount = () =>
    axiosInstance.get("/api/analytics/visitor-count/daily/");

export const getProductSessionFiltered = (params) =>
    axiosInstance.get("/api/analytics/product-session/", { params });

export const getProductInterest = () =>
    axiosInstance.get("/api/analytics/product-interest/");

export const getTotalLink = () =>
    axiosInstance.get("/api/analytics/total-link/");

export const getTodayLinkCount = () =>
    axiosInstance.get("/api/analytics/today-link-count/");

export const getTodayClickCount = () =>
    axiosInstance.get("/api/analytics/today-click-count/");

export const getTodayVisitorCount = () =>
    axiosInstance.get("/api/analytics/visitor-count/today/");

export const getTodayProductSession = () =>
    axiosInstance.get("/api/analytics/product-session/", { params: { period: "today" } });