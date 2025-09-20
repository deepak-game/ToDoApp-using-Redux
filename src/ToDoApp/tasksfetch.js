import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  try {
    const response = await fetch("/tasks.json");
    const data = await response.json();
    return data;
  } catch (err) {
    throw Error(
      "Task Data could not be loaded now! Please try after some time!"
    );
  }
});

export default fetchTasks;
