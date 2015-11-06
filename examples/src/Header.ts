import {Component} from 'angular2/angular2';


@Component({
    selector:'todo-header',
    template: `
        <header id="header">
            <h1>todos</h1>
            <form id="todo-form" ng-submit="addTodo()">
                <input id="new-todo" placeholder="What needs to be done?" >
            </form>
        </header>
    `
})
export class Header {

}