import { createSlice } from "@reduxjs/toolkit";
export const todoslice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    allactive: "all",
  },
  reducers: {
    addtodo: (state, actions) => {
      state.items.push(actions.payload);
    },
    destroy: (state, actions) => {
      state.items = state.items.filter((item) => item.id !== actions.payload);
    },
    completedChange: (state, actions) => {
      const item = state.items.find((item) => item.id === actions.payload);
      item.completed = !item.completed;
    },
    clear: (state) => {
      state.items = state.items.filter((item) => item.completed !== false);
    },
    status: (state, actions) => {
      state.allactive = actions.payload;
    },
  },
});

export const { addtodo, completedChange, destroy, clear, status } =
  todoslice.actions;
export default todoslice.reducer;
