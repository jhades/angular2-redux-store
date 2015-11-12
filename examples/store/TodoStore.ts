
import  {Injectable, Injector} from 'angular2/angular2';
import {List} from 'immutable';
import {Todo} from "./../Todo";
import {Ng2Store} from 'ng2-store';
import * as actions from './actions';
import {addTodoAction} from './addTodoAction';


@Injectable()
export abstract class TodoStore extends Ng2Store<List<Todo>> {

    todos: List<Todo> = List([new Todo(1, 'task 1'), new Todo(2, 'task 2')]);

    constructor() {
        super();
        this.register(actions.ADD_TODO, addTodoAction);
    }

    getState(): List<Todo> {
        return this.todos;
    }

}