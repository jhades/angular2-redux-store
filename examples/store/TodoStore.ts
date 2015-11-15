
import  {Injectable, Injector} from 'angular2/angular2';
import {List} from 'immutable';
import {Todo} from "./../Todo";
import {Ng2Store} from 'ng2-store';
import * as actions from './actions';
import {AddTodoAction} from './actions/AddTodoAction';
import {ToggleAllAction} from "./actions/ToggleAllAction";
import {ToggleTodoAction} from "./actions/ToggleTodoAction";
import {DeleteTodoAction} from "./actions/DeleteTodoAction";
import {ClearAllAction} from "./actions/ClearAllAction";


@Injectable()
export abstract class TodoStore extends Ng2Store<List<Todo>> {

    constructor(injector: Injector) {

        super(injector, List([new Todo(1, 'task 1'), new Todo(2, 'task 2')]));

        this.register(actions.ADD_TODO, AddTodoAction);
        this.register(actions.TOGGLE_ALL, ToggleAllAction);
        this.register(actions.TOGGLE_TODO, ToggleTodoAction);
        this.register(actions.DELETE_TODO, DeleteTodoAction);
        this.register(actions.CLEAR_ALL, ClearAllAction);
    }

}