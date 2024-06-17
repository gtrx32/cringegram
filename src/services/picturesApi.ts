import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const picturesApi = createApi({
  reducerPath: "picturesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPictures: builder.query({
      query: () => "pictures",
    }),
  }),
});

export const { useGetPicturesQuery } = picturesApi;
