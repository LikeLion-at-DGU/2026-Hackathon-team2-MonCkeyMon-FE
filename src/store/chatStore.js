import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useChatStore = create(
    persist(
        (set) => ({
            visibleMessages: 1,

            advanceTo: (target) =>
                set((state) => ({
                    visibleMessages: Math.max(state.visibleMessages, target),
                })),

            clampTo: (min, max) =>
                set((state) => ({
                    visibleMessages: Math.min(Math.max(state.visibleMessages, min), max),
                })),

            resetMessages: () =>
                set({ visibleMessages: 1 }),
        }),
        {
            name: "mcm-chat",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({ visibleMessages: state.visibleMessages }),
        }
    )
);
