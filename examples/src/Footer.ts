import {Component} from 'angular2/angular2';

@Component({
    selector: 'todo-footer',
    template: `
        <footer id="footer">
            <span id="todo-count"><strong class="ng-binding">3 </strong>
            items left</span>
            <ul id="filters">
                <li>
                    <a href="#" class="selected">All</a>
                </li>
                <li>
                    <a href="#">Active</a>
                </li>
                <li>
                    <a href="#">Completed</a>
                </li>
            </ul>
            <button id="clear-completed">Clear completed (3)</button>
        </footer>
    `
})
export class Footer {




}