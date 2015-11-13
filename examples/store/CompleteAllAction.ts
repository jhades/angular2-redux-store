
import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {Todo} from "../Todo";

export class ToggleAllAction implements Ng2StoreAction<List<Todo>> {

    execute(state:List<Todo>, args:Object) {
        return state.reduce(
            (state, todo) => state.push(new Todo(todo.id, todo.description, !todo.completed)),
            List([])
        );
    }

}