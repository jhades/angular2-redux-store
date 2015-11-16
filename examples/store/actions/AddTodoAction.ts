
import {Injectable} from 'angular2/angular2';
import {Todo} from "../../Todo";
import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {Http} from 'angular2/http';

@Injectable()
export class AddTodoAction implements Ng2StoreAction<List<Todo>> {

    constructor(private http:Http) {

    }

    execute( state:List<Todo>, {description} )  {

        let newTodo = new Todo(Math.random(), description);

        return this.http.post('/todo', JSON.stringify(newTodo.toJS()))
            .map((res) => res.json());

    }

}

