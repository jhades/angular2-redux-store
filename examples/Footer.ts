import {Component, Input, Output, EventEmitter} from 'angular2/angular2';

@Component({
    selector: 'todo-footer',
    template: `
        <footer id="footer">
            <button id="clear-completed" (click)="onClear()">Clear All ({{count}})</button>
        </footer>
    `
})
export class Footer {

    @Input() count: number = 0;

    @Output() clear: EventEmitter = new EventEmitter();

    onClear() {
        this.clear.next();
    }

}