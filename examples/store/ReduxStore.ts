
import {Observable, EventEmitter} from 'angular2/angular2';


export class ReduxStore {

    value: Observable = <Observable>new EventEmitter();

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