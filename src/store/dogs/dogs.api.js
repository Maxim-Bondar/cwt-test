import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const dogsAPI = createApi({
  reducerPath: "dogs/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dog.ceo/api",
  }),
  endpoints: (build) => ({
    getBreeds: build.query({
      query: () => "/breeds/list/all",
      transformResponse: (response) => {
        return Object.keys(response.message).map((item) => ({
          breed: item,
        }));
      },
    }),
    getDogImage: build.query({
      query: (pug) => ({
        url: `/breed/${pug}/images/random`,
      }),
    }),
  }),
});

export const { useLazyGetBreedsQuery, useLazyGetDogImageQuery } = dogsAPI;
