import { create } from "zustand";

export const cart = create((set)=> ({
    count:0,
    increasecount: () => set((state) => ({count: state.count+1 })),
    decrement: () => set((state) => ({count: state.count - 1})),
}))

