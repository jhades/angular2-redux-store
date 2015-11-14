
import {Ng2StoreAction} from "ng2-store";
import {Todo} from "../Todo";
import {List} from 'immutable';

export class ToggleTodoAction implements Ng2StoreAction<List<Todo>> {

    execute(state:List<Todo>, todo:Todo) {

        //TODO doesn't work - try with some simple example to see how this API works

        return state.merge( [new Todo(todo.id, todo.description, !todo.completed) ]);
    }

}