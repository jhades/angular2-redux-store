
import {Observable} from 'angular2/angular2';
import EventEmitter = NodeJS.EventEmitter;

export class ReduxStore {

    value: Observable = new EventEmitter();

    constructor(private store) {
        store.subscribe(() => this.value.next(this.getState()));
    }

    getState() {
        return this.store.getState();
    }

    dispatch(action) {
        this.store.dispatch(action);
    }

}