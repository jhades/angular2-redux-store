
import  'reflect-metadata';
import {Component, bootstrap} from 'angular2/angular2';
import {Header} from './Header';
import {TodoList} from './TodoList';

@Component({
    selector: 'app',
    directives: [Header, TodoList],
    template: `
        <div>
            <section id="todoapp">

                <todo-header></todo-header>

                <todo-list></todo-list>

            </section>
            <footer id="info">
                <p>Double-click to edit a todo</p>
            </footer>
        </div>
    `
})
export class App {


}

bootstrap(App);