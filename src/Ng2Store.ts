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

    register(actionName: string, storeActionClass: Ng2StoreAction<S> ) {
        this.actions[actionName] = new (<Function>storeActionClass);
    }

    dispatch(actionName: string, args: Object = {})  {

        //TODO check if dispatch is ongoing

        var newState = this.actions[actionName].execute(this._state, args);

        if (newState) {
            this._state = newState;
        }
    }

    undo() {
        //TODO
    }

    redo() {
        //TODO
    }

}