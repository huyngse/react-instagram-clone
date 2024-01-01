import { create } from "zustand";
const usePostStore = create((set) => {
  return {
    posts: [],
    createPost: (post) =>
      set((prev) => {
        return {
          posts: [post, ...prev.posts],
        };
      }),
    // delete post
    // add comment
    // set posts
  };
});
export default usePostStore;