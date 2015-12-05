import {Component,Input, NgFor, NgClass,Output, EventEmitter} from 'angular2/angular2';
import {Todo} from "./Todo";
import {List} from 'immutable';
import * as actions from './store/actions/actions';


@Component({
    selector: 'todo-list',
    directives: [NgFor, NgClass],
    template: `

        <section id="main" [hidden]="todos.size === 0">
            <label for="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                <li *ng-for="#todo of todos;" [ng-class]="{completed: todo.completed}">
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

    constructor() {

    }

    onToggleTodo(todo: Todo) {
        //TODO
        /*
        this.store.dispatch(actions.TOGGLE_TODO, todo)
            .subscribe(
                res => console.log('TODO toggled successfully'),
                error => console.log(`Error occurred: ${error} `)
            );;
        */
    }

    delete(todo:Todo) {
        // TODO
        /*
        this.store.dispatch(actions.DELETE_TODO, todo)
            .subscribe(
                res => console.log('TODO deleted successfully'),
                error => console.log(`Error occurred: ${error} `)
            );
            */
    }

}