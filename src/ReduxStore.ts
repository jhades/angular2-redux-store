
import {Observable, EventEmitter} from 'angular2/angular2';

/**
 *
 * A minimalistic Redux store for Angular 2. This class is meant for demonstration purposes, as you can see there is
 * not much going on here.
 *
 * This class is meant to be sub-classed per project, and a redux store needs to be passed in the constructor.
 *
 * This class then needs to be passed to the root bootstrap call of the application, so that the store can be
 * injected in any part of the application that needs it.
 *
 * The redux API for methods getState() and dispatch is exposed directly.
 *
 * The remaining redux API method subscribe() is not exposed, instead an observable is made available.
 *
 * The user can subscribe to store value changes using store.value.subscribe().
 *
 */

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