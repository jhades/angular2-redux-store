
import {Injectable,Inject} from '../../../../node_modules/angular2/angular2.d';
import {Todo} from "../../../Todo";
import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {TodoService} from "../../../TodoService";

@Injectable()
export class AddTodoAction implements Ng2StoreAction<List<Todo>> {

    constructor(private todoService: TodoService) {
        this.todoService = todoService;
    }

    execute( state:List<Todo>, {description} )  {

        let newTodo = new Todo(Math.random(), description);

        return this.todoService.saveTodo(newTodo).map(res => Todo.fromJsonList(res.json()));
    }

}

