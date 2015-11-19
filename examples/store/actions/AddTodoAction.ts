
import {Injectable} from 'angular2/angular2';
import {Todo} from "../../Todo";
import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class AddTodoAction implements Ng2StoreAction<List<Todo>> {

    constructor(private http:Http) {

    }

    execute( state:List<Todo>, {description} )  {

        let newTodo = new Todo(Math.random(), description);

        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.post('/todo', JSON.stringify(newTodo.toJS()),{headers})
            .map((res) => List(res.json()));

    }

}

