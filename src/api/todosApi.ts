import { Todo } from "@/types/todo";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    searchUserTodos: builder.query<Todo[], string>({
      query: (value: string) => ({
        url: "todos",
        params: {
          userId: value,
        },
      }),
    }),
  }),
});

export const { useSearchUserTodosQuery } = todosApi;
