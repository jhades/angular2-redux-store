
import {Ng2StoreAction} from "ng2-store";
import {Todo} from "../Todo";
import {List} from 'immutable';

export class ToggleTodoAction implements Ng2StoreAction<List<Todo>> {

    execute(state:List<Todo>, modifiedTodo:Todo) {
        return state.reduce( (state,todo) => {
            if (todo.id === modifiedTodo.id) {
                return state.push(Todo.from(todo, {completed: !todo.completed}));
            }
            else {
                return state.push(todo);
            }
        }, List<Todo>([]));
    }

}