
import  'reflect-metadata';
import {Component, bootstrap} from 'angular2/angular2';
import {Header} from './Header';
import {TodoList} from './TodoList';
import {List} from 'immutable';
import {Todo} from "./Todo";

@Component({
    selector: 'app',
    directives: [Header, TodoList],
    template: `
        <div>
            <section id="todoapp">

                <todo-header (todo)="onAddTodo($event)"></todo-header>

                <todo-list [todos]="todos"></todo-list>

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