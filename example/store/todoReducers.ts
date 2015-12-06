
import {List} from 'immutable';
import {Todo} from "../Todo";
import {ADD_TODO,DELETE_TODO,LOAD_TODOS, TOGGLE_TODO} from './todoActions';


export function todoReducers(state: List<Todo>, action) {
    switch(action.type) {
        case LOAD_TODOS:
            return List(action.todos);
        case ADD_TODO:
            return state.push(action.newTodo);
        case TOGGLE_TODO:
            return toggleTodo(state, action);
        case DELETE_TODO:
            let index = state.findIndex((todo) => todo.id === action.todo.id);
            return state.delete(index);
        default:
            return state;
    }
}

function toggleTodo(state, action) {
    let index = state.findIndex((todo: Todo) => todo.id === action.todo.id);
    let toggled:Todo = state.get(index);
    return state.set(index, new Todo({id:toggled.id, description:toggled.description, completed:!toggled.completed}) );
}