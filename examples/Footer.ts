import {Component, Input} from 'angular2/angular2';

@Component({
    selector: 'todo-footer',
    template: `
        <footer id="footer">
            <button id="clear-completed">Clear completed ({{count}})</button>
        </footer>
    `
})
export class Footer {

    @Input() count: number = 0;


}