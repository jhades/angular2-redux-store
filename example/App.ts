
/// <reference path="../jspm_packages/npm/immutable@3.7.5/dist/immutable.d.ts" />

import  'reflect-metadata';
import {Component, bootstrap} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Header} from './Header';
import {TodoList} from './TodoList';
import {Todo} from "./Todo";
import {Footer} from "./Footer";
import {TodoService} from "./TodoService";
import {TodoStore} from "./store/TodoStore";
import {loadTodos, addTodo,startBackendAction, endBackendAction} from './store/todoActions';
import {List} from 'immutable';

@Component({
    selector: 'app',
    directives: [Header, TodoList, Footer],
    template: `
        <div>
            <section id="todoapp">

                <todo-header (todo)="onAddTodo($event)"></todo-header>

                <todo-list [todos]="store.getState().todos"></todo-list>

                <todo-footer [hidden]="store.getState().todos.size === 0" [count]="store.getState().todos.size"></todo-footer>

            </section>
            <footer id="info">
                <p>{{store.getState().uiState.message}}</p>
                <p>Add, Remove and Complete TODOs</p>
            </footer>
        </div>
    `
})
export class App {

    constructor(private store: TodoStore, private todoService: TodoService) {

        todoService.getAllTodos()
            .subscribe(
                res => {
                    todos = (<Object[]>res.json()).map((todo: any) =>
                        new Todo({id:todo.id, description:todo.description,completed: todo.completed}));

                    store.dispatch(loadTodos(List(todos)));
                },
                err => console.log("Error retrieving Todos")
            );

        store.subscribe(
            state => console.log('new state received ')
        );
    }

    onAddTodo(description) {
        let newTodo = new Todo({id:Math.random(), description});

        this.store.dispatch(startBackendAction('Saving Todo...'));

        this.todoService.saveTodo(newTodo)
            .subscribe(
                res => {
                    this.store.dispatch(addTodo(newTodo));
                    this.store.dispatch(endBackendAction());
                },
                err => {
                    this.store.dispatch(endBackendAction('Error occurred: '));
                }
            );
    }

}

bootstrap(App, [
    HTTP_PROVIDERS,
    TodoService,
    TodoStore
]);