import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {Todo} from "../../Todo";
import {Injectable} from 'angular2/angular2';

@Injectable()
export class ToggleAllAction implements Ng2StoreAction<List<Todo>> {

    execute(state:List<Todo>, args:Object) : List<Todo> {
        return state.reduce(
            (state, todo) => state.push(Todo.from(todo, {completed: !todo.completed}) ),
            List([])
        );
    }

}