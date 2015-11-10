
import {TodoStore} from "./TodoStore";
import  {Injectable} from 'angular2/angular2';
import {Todo} from "../Todo";
import {Ng2StoreAction} from "ng2-store";

@Injectable()
export class AddTodoAction {

    static ACTION = "addTodo";

    constructor(store: TodoStore) {

        store.register(AddTodoAction.ACTION, ({description}) => {
            store.todos = store.todos.push(new Todo(store.todos.size + 1, description));
        });

    }

}