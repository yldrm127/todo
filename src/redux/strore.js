import todoReducer from "../components/todoslice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
