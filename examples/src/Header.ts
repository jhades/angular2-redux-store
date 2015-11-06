import {Component, FORM_DIRECTIVES, Output,EventEmitter} from 'angular2/angular2';


@Component({
    selector:'todo-header',
    directives: [FORM_DIRECTIVES],
    template: `
        <header id="header">
            <h1>todos</h1>
            <form id="todo-form" (ng-submit)="addTodo(input.value)">
                <input id="new-todo" placeholder="What needs to be done?" #input>
            </form>
        </header>
    `
})
export class Header {

    @Output() todo = new EventEmitter();

    addTodo(description: string) {
        this.todo.next(description);
    }

}