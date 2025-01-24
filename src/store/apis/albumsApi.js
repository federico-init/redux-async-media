import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: {},
});
