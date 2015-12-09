
import {Injectable} from 'angular2/angular2';
import {createStore, applyMiddleware} from 'redux';
import {todoReducers} from './todoReducers';
import {List} from 'immutable';
import createLogger from 'redux-logger';
import {ReduxStore} from "./../../src/ReduxStore";

const logger = createLogger({
    stateTransformer: (state) => state.toJS()
});
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(todoReducers, List([]));

@Injectable()
export class TodoStore extends ReduxStore {

    constructor() {
        super(store);
    }

}