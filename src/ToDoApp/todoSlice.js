import { createSlice } from "@reduxjs/toolkit";
import fetchTasks from "./tasksfetch";

const initialState = {
  items: [],
  loading: false,
  error: null,
  editTaskId: "",
  filterData: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: function (state, action) {
      state.items.push({
        id: state.items.length + 1,
        ...action.payload,
        status: "To Do",
      });
    },
    moveTask: function (state, action) {
      state.items = state.items.map((el) =>
        el.id === action.payload.id ? { ...action.payload.moveData } : el
      );
    },
    deleteTask: function (state, action) {
      state.items = state.items.filter((el) => el.id !== action.payload);
    },
    updateTask: function (state, action) {
      state.items = state.items.map((el) =>
        el.id == action.payload.id ? action.payload.updatedData : el
      );
      state.editTaskId = "";
    },
    showEdit: function (state, action) {
      state.editTaskId = action.payload;
    },
    filterData: function (state, action) {
      state.filterData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default tasksSlice.reducer;
export const {
  addTask,
  moveTask,
  deleteTask,
  updateTask,
  showEdit,
  filterData,
} = tasksSlice.actions;
