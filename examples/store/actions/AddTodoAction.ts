
import {Injectable,Inject} from 'angular2/angular2';
import {Todo} from "../../Todo";
import {Ng2StoreAction} from "ng2-store";
import {List} from 'immutable';
import {TodoService} from "../../TodoService";


@Injectable()
export class AddTodoAction implements Ng2StoreAction<List<Todo>> {

    todoService: TodoService;

    constructor(todoService: TodoService) {
        this.todoService = todoService;
    }

    execute( state:List<Todo>, {description} )  {

        let newTodo = new Todo(Math.random(), description);

        return this.todoService.saveTodo(newTodo);
    }

}

