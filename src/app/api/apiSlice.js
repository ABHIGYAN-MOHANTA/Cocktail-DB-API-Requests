import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl:
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
});

export const drinksApiSlice = createApi({
  baseQuery,
  tagTypes: ["Drink"],
  endpoints: (builder) => ({
    getDrinks: builder.query({
      query: () => "",
      transformResponse: (responseData) => responseData.drinks,
    }),
  }),
});

export const { useGetDrinksQuery } = drinksApiSlice;
