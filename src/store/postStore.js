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
          posts: prev.posts.filter((post) => post.id !== id),
        };
      });
    },
    addComment: (postId, comment) =>
      set((prev) => {
        return {
          posts: prev.posts.map((post) => {
            if (post.id === postId) {
              return {
                ...post,
                comments: [...post.comments, comment],
              };
            }
            return post;
          }),
        };
      }),
    setPosts: (posts) => {
      set({ posts });
    },
  };
});
export default usePostStore;
