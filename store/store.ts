import { configureStore } from '@reduxjs/toolkit';
import { weatherAPI } from '../services/WeatherService';
import sityInputReducer from './reducers/SityInputSlice';
import degreeIndexReducer from './reducers/DegreeSlice';

export const store: any = configureStore({
  reducer: { sityInputReducer, degreeIndexReducer, [weatherAPI.reducerPath]: weatherAPI.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
