
import {List} from 'immutable';
import {Todo} from "../Todo";

export const LOAD_TODOS = "LOAD_TODOS_ACTION";
export const ADD_TODO = "ADD_TODO_ACTION";
export const TOGGLE_TODO = "TOGGLE_TODO_ACTION";
export const DELETE_TODO = "DELETE_TODO_ACTION";

export function loadTodos(todos: List<Todo>) {
    return {
        type: LOAD_TODOS,
        todos: todos
    }
}

export function addTodo(newTodo: Todo) {
    return {
        type: ADD_TODO,
        newTodo
    }
}

export function toggleTodo(todo: Todo) {
    return {
        type: TOGGLE_TODO,
        todo
    }
}

export function deleteTodo(todo: Todo) {
    return {
        type: DELETE_TODO,
        todo
    }
}
