
import {Injectable} from '../../../../node_modules/angular2/angular2.d';
import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {Todo} from "../../../Todo";

@Injectable()
export class ClearAllAction implements Ng2StoreAction<List<Todo>> {

    execute(state:Immutable.List<Todo>) {
        return state.clear();
    }

}