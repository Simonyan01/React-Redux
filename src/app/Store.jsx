import { combineReducers, createStore } from "redux";
import { currentTodoReducer, currentTodoState, initialTodos, todosReducer } from "../features/todosSlice";

const Store = createStore(combineReducers({
    todos: todosReducer,
    currentTodo: currentTodoReducer
}), {
    todos: initialTodos,
    currentTodo: currentTodoState
})

export default Store