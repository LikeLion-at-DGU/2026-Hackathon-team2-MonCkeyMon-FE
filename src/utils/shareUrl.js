export const getShareUrl = (sessionId) => {
    if (!sessionId) return "";

    const baseUrl = import.meta.env.VITE_SHARE_BASE_URL || window.location.origin;
    return `${baseUrl.replace(/\/+$/, "")}/share/${sessionId}`;
};
