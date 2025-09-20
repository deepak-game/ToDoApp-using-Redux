import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./todoSlice.js";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
