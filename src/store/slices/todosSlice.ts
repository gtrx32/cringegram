import { Todo } from "@/types/todo";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      state.todos = state.todos.filter((f) => f.id !== action.payload.id);
    },
  },
});

export const todosActions = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
