import { create } from "zustand";

const useUserProfileStore = create((set) => {
  return {
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    addPost: (post) =>
      set((prev) => {
        return {
          userProfile: {
            ...prev.userProfile,
            posts: [post.id, ...prev.userProfile.posts],
          },
        };
      }),
  };
});

export default useUserProfileStore;
