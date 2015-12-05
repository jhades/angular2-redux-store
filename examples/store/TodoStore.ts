
import {Injectable} from 'angular2/angular2';
import {createStore} from 'redux';
import {todoReducers} from './todoReducers';
import {List} from 'immutable';
import {ReduxStore} from "./ReduxStore";

let store = createStore(todoReducers, List([]));

@Injectable()
export class TodoStore extends ReduxStore {

    constructor() {
        super(store);
    }

}