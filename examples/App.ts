/// <reference path="../jspm_packages/npm/immutable@3.7.5/dist/immutable.d.ts"/>

import  'reflect-metadata';
import {Component, bootstrap} from 'angular2/angular2';
import {Header} from './Header';
import {TodoList} from './TodoList';
import {Todo} from "./Todo";
import {Footer} from "./Footer";
import {TodoStore} from "./store/TodoStore";
import {AddTodoAction} from "./store/AddTodoAction";

@Component({
    selector: 'app',
    directives: [Header, TodoList, Footer],
    template: `
        <div>
            <section id="todoapp">

                <todo-header (todo)="onAddTodo($event)"></todo-header>

                <todo-list [todos]="store.getState()" (all-completed)="onAllCompleted()"></todo-list>

                <todo-footer [hidden]="store.getState().size === 0"></todo-footer>

            </section>
            <footer id="info">
                <p>Click to edit a todo</p>
            </footer>
        </div>
    `
})
export class App {

    constructor(private store: TodoStore) {

    }

    onAddTodo(description) {
        this.store.dispatch(AddTodoAction.ACTION, {description});
    }

    onAllCompleted() {
        //TODO
    }

}

bootstrap(App, [TodoStore]);