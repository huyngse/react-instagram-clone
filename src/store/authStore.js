import { create } from "zustand";
const useAuthStore = create((set) => {
  return {
    user: JSON.parse(localStorage.getItem("userInfo")),
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user) => set({ user }),
  };
});
export default useAuthStore;
