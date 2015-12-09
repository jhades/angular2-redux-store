
import {Injectable} from 'angular2/angular2';
import {createStore, applyMiddleware} from 'redux';
import {todoApp, initialUiState} from './todoReducers';
import {List} from 'immutable';
import createLogger from 'redux-logger';
import {ReduxStore} from "./../../src/ReduxStore";

const logger = createLogger({
    stateTransformer: (state) => {
        return {
            todos: state.todos.toJS(),
            uiState: state.uiState
        }
    }
    });

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(
    todoApp,
    {
        todos:List([]),
        uiState: initialUiState
    });


@Injectable()
export class TodoStore extends ReduxStore {

    constructor() {
        super(store);
    }

}