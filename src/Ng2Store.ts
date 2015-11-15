import {Ng2StoreAction} from "./Ng2StoreAction";


export abstract class Ng2Store<S> {

    _state: S;

    actions: {[actionName: string]: Ng2StoreAction<S> } = {};

    isDispatchOngoing = false;

    currentActionName: string;
    currentAction: Ng2StoreAction<S> = null;

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

        this.check(actionName, 'The dispatched action name needs to be defined.');
        this.check(this.actions[actionName], `Action ${actionName} is not registered in the store.`);
        this.check(!this.isDispatchOngoing, `Action ${this.currentActionName} is already being dispatched. Cannot dispatch action ${actionName} before the current action finishes.`);

        try {
            this.isDispatchOngoing = true;
            this.currentAction = this.actions[actionName];

            var newState = this.currentAction.execute(this._state, args);
        }
        finally {
            this.isDispatchOngoing = false;
        }

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

    check(condition, message:String) {
        if (!condition) {
            throw new Error(message);
        }

    }

}