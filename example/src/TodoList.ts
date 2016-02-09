import {Component,Input,Output, EventEmitter,ChangeDetectionStrategy} from 'angular2/core';
import {Todo} from "./Todo";
import {List} from 'immutable';
import {TodoService} from "./TodoService";
import {TodoStore} from "./store/TodoStore";
import {toggleTodo, deleteTodo} from './store/todoActions';


@Component({
    selector: 'todo-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

        <section id="main" [hidden]="todos.size === 0">
            <label for="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                <li *ngFor="#todo of todos;" [ngClass]="{completed: todo.completed}">
                    <div class="view">
                        <input class="toggle" type="checkbox" (change)="onToggleTodo(todo)" [checked]="todo.completed">
                        <label>{{todo.description}}</label>
                        <button class="destroy" (click)="delete(todo)"></button>
                    </div>
                </li>
            </ul>
        </section>
    `
})
export class TodoList {

    @Input() todos: List<Todo>;
    @Output()  toggleAll: EventEmitter<any> = new EventEmitter();
    @Output()  deleteTodo: EventEmitter<any> = new EventEmitter();

    constructor(private todoService: TodoService, private store: TodoStore) {

    }

    onToggleTodo(todo: Todo) {

        this.store.dispatch(toggleTodo(todo));

        this.todoService.toggleTodo(todo)
            .subscribe(
                res => console.log('todo toggled successfully'),
                err => console.log('error toggling todo')
            );
    }

    delete(todo:Todo) {
        this.store.dispatch(deleteTodo(todo));

        this.todoService.deleteTodo(todo)
            .subscribe(
                res => console.log('todo toggled successfully'),
                err => console.log('error toggling todo')
            );

    }

}