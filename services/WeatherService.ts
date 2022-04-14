import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IWeather } from '../models/IWeather';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
  endpoints: (build) => ({
    fetchWeatherInfo: build.query<IWeather, string>({
      query: (arg: any) =>
        `weather?q=${arg}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}&units=metric&lang=ru`,
    }),
  }),
});

export const { useFetchWeatherInfoQuery } = weatherAPI;
