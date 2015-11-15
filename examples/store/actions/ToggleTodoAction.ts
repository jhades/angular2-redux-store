import {Injectable} from 'angular2/angular2';
import {Ng2StoreAction} from "ng2-store";
import {Todo} from "../../Todo";
import {List} from 'immutable';

@Injectable()
export class ToggleTodoAction implements Ng2StoreAction<List<Todo>> {

    execute(state:List<Todo>, toggled:Todo) {
        let index = state.indexOf(toggled);
        return state.set(index, Todo.from(toggled, {completed: !toggled.completed}) );
    }

}

