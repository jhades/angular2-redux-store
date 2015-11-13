import {Ng2StoreAction} from "./Ng2StoreAction";


export abstract class Ng2Store<S> {

    _state: S;

    actions: {[actionName: string]: Ng2StoreAction<S> } = {};

    constructor(initialState: S) {
        this._state = initialState;
    }

    get state(): S {
        return this._state;
    };

    protected register(actionName: string, storeActionClass: Ng2StoreAction<S> ) {

        //TODO basic API validation

        //TODO check if action is already registered

        this.actions[actionName] = new (<Function>storeActionClass);
    }

    protected registerAll() {

        //TODO basic API validation

        //TODO alternate register function based on a list of arrays with key pair tuples

    }

    dispatch(actionName: string, args: Object = {})  {

        //TODO basic API validation

        //TODO check if dispatch is ongoing

        //TODO check if action is registered

        var newState = this.actions[actionName].execute(this._state, args);

        if (newState) {
            this._state = newState;
        }
    }

    undo() {
        //TODO

        //TODO check if dispatch is ongoing
    }

    redo() {
        //TODO

        //TODO check if dispatch is ongoing
    }

}