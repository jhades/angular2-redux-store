import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {Todo} from "../../Todo";
import {Injectable} from 'angular2/angular2';

@Injectable()
export class DeleteTodoAction implements Ng2StoreAction<List<Todo>> {

    execute(state:Immutable.List<Todo>, deleted) {
        return state.delete(state.indexOf(deleted));
    }

}