
import {Todo} from "../../Todo";
import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';

export class AddTodoAction implements Ng2StoreAction<List<Todo>> {

    execute( state:List<Todo>, {description} )  {

        return state.push(new Todo(Math.random(), description));
    }

}