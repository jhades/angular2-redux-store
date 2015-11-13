
import  {Injectable, Injector} from 'angular2/angular2';
import {List} from 'immutable';
import {Todo} from "./../Todo";
import {Ng2Store} from 'ng2-store';
import * as actions from './actions';
import {AddTodoAction} from './AddTodoAction';
import {ToggleAllAction} from "./CompleteAllAction";


@Injectable()
export abstract class TodoStore extends Ng2Store<List<Todo>> {

    constructor() {
        super(List([new Todo(1, 'task 1'), new Todo(2, 'task 2')]));

        this.register(actions.ADD_TODO, AddTodoAction);
        this.register(actions.TOGGLE_ALL, ToggleAllAction);
    }


}