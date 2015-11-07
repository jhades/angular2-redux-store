
import  'reflect-metadata';
import {Component, bootstrap} from 'angular2/angular2';
import {Header} from './Header';
import {TodoList} from './TodoList';
import {List} from 'immutable';
import {Todo} from "./Todo";
import {Footer} from "./Footer";

@Component({
    selector: 'app',
    directives: [Header, TodoList, Footer],
    template: `
        <div>
            <section id="todoapp">

                <todo-header (todo)="onAddTodo($event)"></todo-header>

                <todo-list [todos]="todos"></todo-list>

                <todo-footer [hidden]="todos.size === 0"></todo-footer>

            </section>
            <footer id="info">
                <p>Click to edit a todo</p>
            </footer>
        </div>
    `
})
export class App {

    todos: List<Todo> = List([new Todo('task 1'), new Todo('task 2')]);


    onAddTodo(description) {
        console.log(description);
    }


}

bootstrap(App);