import {Injectable, Observable} from 'angular2/angular2';
import {Ng2StoreAction} from "ng2-store";
import {Todo} from "../../Todo";
import {List} from 'immutable';
import {TodoService} from "../../TodoService";

@Injectable()
export class ToggleTodoAction implements Ng2StoreAction<List<Todo>> {

    constructor(private todoService: TodoService) {
        this.todoService = todoService;
    }

    execute(state:List<Todo>, toggled:Todo) : Observable<List<Todo>> {
        return this.todoService.toggleTodo(toggled);
    }

}

