
import {Injectable,Inject} from 'angular2/angular2';
import  {Http,Headers} from 'angular2/http';
import {Todo} from "./Todo";
import {List} from 'immutable';
import {Observable} from "angular2/angular2";

@Injectable()
export class TodoService {

    http:Http;

    constructor(http:Http)  {
        this.http = http;
    }


    getAllTodos() {
        return this.http.get('/todo')
            .map(res => List(res.json()) );
    }

    saveTodo(newTodo: Todo) : Observable<List<Todo>> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.post('/todo', JSON.stringify(newTodo.toJS()),{headers})
            .map((res) => List(res.json()));
    }

}