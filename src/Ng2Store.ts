import {Ng2StoreAction} from "./Ng2StoreAction";
import {Injector} from 'angular2/angular2';

export abstract class Ng2Store<S> {

    _state: S;

    actions: {[actionName: string]: Ng2StoreAction<S> } = {};

    isDispatchOngoing = false;

    currentActionName: string;
    currentAction: Ng2StoreAction<S> = null;


    constructor(private injector: Injector, initialState: S) {
        this._state = initialState;
    }

    get state(): S {
        return this._state;
    };

    protected register(actionName: string, storeActionClass: Ng2StoreAction<S> ) {

        this.check(actionName, 'The dispatched action name must be defined.');
        this.check(storeActionClass, 'The store action class must be defined.');
        this.check(!this.actions[actionName], `Action ${actionName} is already registered in the store.`);

        this.actions[actionName] = this.injector.get(storeActionClass);
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

            this.check(newState, `Action ${this.currentActionName} must return the new state (it cannot undefined).`);
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