import { create } from "zustand";

const useUserProfileStore = create((set) => {
  return {
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    addPost: (post) => {
      set((prev) => {
        return {
          userProfile: {
            ...prev.userProfile,
            posts: [post.id, ...prev.userProfile.posts],
          },
        };
      });
    },
    deletePost: (postID) =>
      set((prev) => ({
        userProfile: {
          ...prev.userProfile,
          posts: prev.userProfile.posts.filter((id) => id !== postID),
        },
      })),
  };
});

export default useUserProfileStore;
