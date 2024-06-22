import { Post } from "@/types/post";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<Post>) {
      state.posts.push(action.payload);
    },
    removePost(state, action: PayloadAction<Post>) {
      state.posts = state.posts.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
