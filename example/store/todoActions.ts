
import {List} from 'immutable';
import {Todo} from "../Todo";

export const LOAD_TODOS = "LOAD_TODOS";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const BACKEND_ACTION_STARTED="BACKEND_ACTION_STARTED";
export const BACKEND_ACTION_FINISHED="BACKEND_ACTION_FINISHED";


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

export function startBackendAction(message: string) {
    return {
        type: BACKEND_ACTION_STARTED,
        message
    }
}

export function endBackendAction() {
    return {
        type: BACKEND_ACTION_FINISHED
    }
}
