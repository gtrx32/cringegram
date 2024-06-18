import { postsApi } from "@/api/postsApi";
import { todosApi } from "@/api/todosApi";
import { usersApi } from "@/api/usersApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      postsApi.middleware,
      todosApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
