import { User } from "@/types/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    searchUsers: builder.query<User[], string>({
      query: (value: string) => ({
        url: "users",
        params: {
          name_like: value,
        },
      }),
    }),
    searchUser: builder.query<User, string>({
      query: (value: string) => ({
        url: "users",
        params: {
          id: value,
        },
      }),
      transformResponse: (response: User[]) => response[0],
    }),
  }),
});

export const { useSearchUsersQuery, useSearchUserQuery } = usersApi;
