
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

    deleteTodo(deletedTodo: Todo) {
        let params = new URLSearchParams();
        params.append('id', '' + deletedTodo.id );

        return this.http.delete('/todo', {search: params})
            .map((res) => List(res.json()));
    }


    toggleTodo(toggled: Todo) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return this.http.put('/todo', JSON.stringify(toggled.toJS()),{headers})
            .map((res) => List(res.json()));
    }

}