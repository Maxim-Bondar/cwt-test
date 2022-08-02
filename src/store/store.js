import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dogsAPI } from "./dogs/dogs.api";
import { dogsReducer } from "./dogs/dogs.slice";

const rootReducers = combineReducers({
  [dogsAPI.reducerPath]: dogsAPI.reducer,
  dogs: dogsReducer,
});

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    dogsAPI.middleware,
  ],
});
