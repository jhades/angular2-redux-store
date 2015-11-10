
import  {Injectable} from 'angular2/angular2';
import {List} from 'immutable';
import {Todo} from "./../Todo";
import {Ng2Store} from 'ng2-store';
import {AddTodoAction} from "./AddTodoAction";

@Injectable()
export abstract class TodoStore extends Ng2Store<List<Todo>> {

    todos: List<Todo> = List([new Todo(1, 'task 1'), new Todo(2, 'task 2')]);

    getState(): List<Todo> {
        return this.todos;
    }

}