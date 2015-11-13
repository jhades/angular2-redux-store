
import {Ng2StoreAction} from "ng2-store";
import {Todo} from "../Todo";
import {List} from 'immutable';

export class CompleteTodoAction implements Ng2StoreAction<List<Todo>> {


    execute(state:List<Todo>, todo:Todo) {

        return state.merge( [new Todo(todo.id, todo.description, true) ]);

    }


}