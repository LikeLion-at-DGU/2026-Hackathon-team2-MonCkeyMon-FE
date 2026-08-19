import { create } from "zustand";

export const useExperienceStore = create((set) => ({
    sessionId: null,
    photo: null,
    backgroundId: null,
    productId: null,
    product: null,
    guideAction: null,

    setSessionId: (sessionId) => set({ sessionId }),
    setPhoto: (photo) => set({ photo }),
    setBackgroundId: (backgroundId) => set({ backgroundId }),
    setProductId: (productId) => set({ productId }),
    setProduct: (product) => set({ product }),
    setGuideAction: (guideAction) => set({ guideAction }),

    reset: () => set({
        sessionId: null,
        photo: null,
        backgroundId: null,
        productId: null,
        product: null,
        guideAction: null,
    }),
}));