import { create } from "zustand";
const usePostStore = create((set) => {
  return {
    posts: [],
    createPost: (post) => {
      set((prev) => {
        return {
          posts: [post, ...prev.posts],
        };
      });
    },
    deletePost: (id) => {
      set((prev) => {
        return {
          posts: prev.posts.filter(post => post.id !== id)
        };
      });
    },
    // add comment
    setPosts: (posts) => {
      set({ posts });
    },
  };
});
export default usePostStore;
