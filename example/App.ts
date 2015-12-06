
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
import {loadTodos, addTodo} from './store/todoActions';
import {List} from 'immutable';

@Component({
    selector: 'app',
    directives: [Header, TodoList, Footer],
    template: `
        <div>
            <section id="todoapp">

                <todo-header (todo)="onAddTodo($event)"></todo-header>

                <todo-list [todos]="store.getState()"></todo-list>

                <todo-footer [hidden]="store.getState().size === 0" [count]="store.getState().size"></todo-footer>

            </section>
            <footer id="info">
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
                    let todos = res.json().map((todo) =>  new Todo(todo.id, todo.description, todo.completed));

                    store.dispatch(loadTodos(List(todos)));
                },
                err => console.log("Error retrieving Todos")
            );

        store.value.subscribe(
            state => console.log('new state received ' + JSON.stringify(state))
        );
    }

    onAddTodo(description) {
        let newTodo = new Todo(Math.random(), description);

        this.store.dispatch(addTodo(newTodo));

        this.todoService.saveTodo(newTodo)
            .subscribe(
                res => console.log('Todo saved successfully'),
                err => console.log('Todo not saved, show error message')
            );
    }

}

bootstrap(App, [
    HTTP_PROVIDERS,
    TodoService,
    TodoStore
]);