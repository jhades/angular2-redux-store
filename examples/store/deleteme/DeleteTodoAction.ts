import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {Todo} from "../../../Todo";
import {Injectable, Observable} from '../../../../node_modules/angular2/angular2.d';
import {TodoService} from "../../../TodoService";

@Injectable()
export class DeleteTodoAction implements Ng2StoreAction<List<Todo>> {

    constructor(private todoService: TodoService) {
        this.todoService = todoService;
    }

    execute(state:Immutable.List<Todo>, deleted) : Observable<List<Todo>> {
        return this.todoService.deleteTodo(deleted)
            .map(res => Todo.fromJsonList(res.json()));
    }

}