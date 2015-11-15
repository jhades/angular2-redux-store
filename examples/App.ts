/// <reference path="../jspm_packages/npm/immutable@3.7.5/dist/immutable.d.ts"/>

import  'reflect-metadata';
import {Component, bootstrap} from 'angular2/angular2';
import {Header} from './Header';
import {TodoList} from './TodoList';
import {Todo} from "./Todo";
import {Footer} from "./Footer";
import {TodoStore} from "./store/TodoStore";
import * as actions from './store/actions';


@Component({
    selector: 'app',
    directives: [Header, TodoList, Footer],
    template: `
        <div>
            <section id="todoapp">

                <todo-header (todo)="onAddTodo($event)"></todo-header>

                <todo-list [todos]="store.state" (toggle-all)="onToggleAll()"></todo-list>

                <todo-footer [hidden]="store.state.size === 0" [count]="store.state.size" (clear)="onClear()"></todo-footer>

            </section>
            <footer id="info">
                <p>Add, Remove and Complete TODOs</p>
            </footer>
        </div>
    `
})
export class App {

    constructor(private store: TodoStore) {

    }

    onAddTodo(description) {
        this.store.dispatch(actions.ADD_TODO, {description});
    }

    onToggleAll() {
        this.store.dispatch(actions.TOGGLE_ALL);
    }

    onClear() {
        this.store.dispatch(actions.CLEAR_ALL);
    }


}

bootstrap(App, [TodoStore]);