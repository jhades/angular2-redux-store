
import {List} from 'immutable';
import {Todo} from "../Todo";
import {LOAD_TODOS} from './actionsTypes';

export function loadTodos(todos: List<Todo>) {
    return {
        type: LOAD_TODOS,
        todos: todos
    }
}