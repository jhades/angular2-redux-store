import {Component, Input, Output, EventEmitter,ChangeDetectionStrategy} from 'angular2/angular2';

@Component({
    selector: 'todo-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <footer id="footer">
            <button>Total Todos: {{count}}</button>
        </footer>
    `
})
export class Footer {

    @Input() count: number = 0;

}