import { Post } from "@/types/post";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    searchUserPosts: builder.query<Post[], number>({
      query: (value: number) => ({
        url: "posts",
        params: {
          userId: value,
        },
      }),
    }),
  }),
});

export const { useSearchUserPostsQuery } = postsApi;
