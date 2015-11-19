
import {Injectable,Inject} from 'angular2/angular2';
import  {Http,Headers} from 'angular2/http';
import {Todo} from "./Todo";
import {List} from 'immutable';

@Injectable()
export class TodoService {

    http:Http;

    constructor(http:Http)  {
        this.http = http;
    }

    saveTodo(newTodo: Todo) {

        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.post('/todo', JSON.stringify(newTodo.toJS()),{headers})
            .map((res) => List(res.json()));
    }

}