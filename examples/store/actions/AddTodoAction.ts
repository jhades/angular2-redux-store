
import {Injectable} from 'angular2/angular2';
import {Todo} from "../../Todo";
import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {Http} from 'angular2/http';

@Injectable()
export class AddTodoAction implements Ng2StoreAction<List<Todo>> {

    constructor(http:Http) {

    }

    execute( state:List<Todo>, {description} )  {
        return state.push(new Todo(Math.random(), description));
    }

}

