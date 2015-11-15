
import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {Todo} from "../../Todo";

export class ClearAllAction implements Ng2StoreAction<List<Todo>> {

    execute(state:Immutable.List<Todo>) {
        return state.clear();
    }


}