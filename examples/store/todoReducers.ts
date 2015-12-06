
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
            let index = state.findIndex((todo) => todo.id === action.todo.id);
            let toggled:Todo = state.get(index);
            return state.set(index, new Todo(toggled.id, toggled.description, !toggled.completed) );
        case DELETE_TODO:

            //TODO

            return state.delete(action.todo);
        default:
            return state;
    }

}