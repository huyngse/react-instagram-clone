import { create } from "zustand";

const useUserProfileStore = create((set) => {
  return {
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    // addPost:()
  };
});

export default useUserProfileStore;
