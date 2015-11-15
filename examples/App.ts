/// <reference path="../jspm_packages/npm/immutable@3.7.5/dist/immutable.d.ts"/>

import  'reflect-metadata';
import {Component, bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Header} from './Header';
import {TodoList} from './TodoList';
import {Todo} from "./Todo";
import {Footer} from "./Footer";
import {TodoStore} from "./store/TodoStore";
import * as actions from './store/actions';
import {AddTodoAction} from "./store/actions/AddTodoAction";
import {ToggleAllAction} from "./store/actions/ToggleAllAction";
import {ToggleTodoAction} from "./store/actions/ToggleTodoAction";
import {DeleteTodoAction} from "./store/actions/DeleteTodoAction";
import {ClearAllAction} from "./store/actions/ClearAllAction";


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
            // TODO
            /*.subscribe(
                res => console.log('TODO added successfully'),
                error => console.log(`Error occurred: ${error} `)
            ); */
    }

    onToggleAll() {
        this.store.dispatch(actions.TOGGLE_ALL);
    }

    onClear() {
        this.store.dispatch(actions.CLEAR_ALL);
    }


}

bootstrap(App, [
    HTTP_PROVIDERS,
    TodoStore,
    AddTodoAction,
    ToggleAllAction,
    ToggleTodoAction,
    DeleteTodoAction,
    ClearAllAction
]);