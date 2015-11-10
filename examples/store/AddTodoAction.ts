
import {TodoStore} from "./TodoStore";
import  {Injectable} from 'angular2/angular2';
import {Todo} from "../Todo";
import {Ng2StoreAction} from "ng2-store";

@Injectable()
export class AddTodoAction implements Ng2StoreAction {

    static ACTION = "addTodo";

    constructor(private store: TodoStore) {

    }

    register() {
        this.store.registerAction(AddTodoAction.ACTION, ({description}) => {
            this.store.todos = this.store.todos.push(new Todo(this.store.todos.size + 1, description));
        });
    }


}