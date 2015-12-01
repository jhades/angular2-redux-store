
import {Injectable,Inject} from 'angular2/angular2';
import  {Http,Headers,URLSearchParams} from 'angular2/http';
import {Todo} from "./Todo";
import {List} from 'immutable';
import {Observable} from "angular2/angular2";

@Injectable()
export class TodoService {

    http:Http;

    constructor(http:Http)  {
        this.http = http;
    }

    getAllTodos() : List<Todo> {
        return this.http.get('/todo').map(TodoService.build);
    }

    saveTodo(newTodo: Todo) : Observable<List<Todo>> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.post('/todo', JSON.stringify(newTodo.toJS()),{headers}).map(TodoService.build);
    }

    deleteTodo(deletedTodo: Todo) {
        let params = new URLSearchParams();
        params.append('id', '' + deletedTodo.id );

        return this.http.delete('/todo', {search: params}).map(TodoService.build);
    }


    toggleTodo(toggled: Todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.put('/todo', JSON.stringify(toggled.toJS()),{headers}).map(TodoService.build);
    }

    static build(res) {
        return Todo.fromJsonList(res.json());
    }


}