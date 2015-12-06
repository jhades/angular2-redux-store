
import {Observable, EventEmitter} from 'angular2/angular2';


export abstract class ReduxStore {

    static initialized = false;
    value: Observable = <Observable>new EventEmitter();

    constructor(private store) {
        if (!store) {
            throw new Error('store cannot be undefined. Make sure to pass the redux store as the only argument of the constructor.');
        }
        if (ReduxStore.initialized) {
            throw new Error('Only one redux store can exist per application.');
        }
        ReduxStore.initialized = true;
        store.subscribe(() => this.value.next(this.getState()));
    }

    getState() {
        return this.store.getState();
    }

    dispatch(action) {
        this.store.dispatch(action);
    }

}