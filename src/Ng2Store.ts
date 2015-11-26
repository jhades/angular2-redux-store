import {Ng2StoreAction} from "./Ng2StoreAction";
import {Injector} from 'angular2/angular2';

export abstract class Ng2Store<S> {

    _state: S;

    actions: {[actionName: string]: Ng2StoreAction<S> } = {};

    isDispatchOngoing = false;

    currentActionName: string;
    currentAction: Ng2StoreAction<S> = null;


    constructor(private injector: Injector, initialState: S, ...middlewares ) {
        this._state = initialState;
    }

    get state(): S {
        return this._state;
    };

    protected setState(state: S):void {
        this._state = state;
    }

    protected register(actionName: string, storeActionClass: Ng2StoreAction<S> ) {

        this.assert(actionName, 'The dispatched action name must be defined.');
        this.assert(storeActionClass, 'The store action class must be defined.');
        this.assert(!this.actions[actionName], `Action ${actionName} is already registered in the store.`);

        this.actions[actionName] = this.injector.get(storeActionClass);
    }

    protected registerAll() {

        //TODO basic API validation

        //TODO alternate register function based on a list of arrays with key pair tuples

    }

    dispatch(actionName: string, args: Object = {})  {

        this.assert(actionName, 'The dispatched action name needs to be defined.');
        this.assert(this.actions[actionName], `Action ${actionName} is not registered in the store.`);
        this.assert(!this.isDispatchOngoing, `Action ${this.currentActionName} is already being dispatched. Cannot dispatch action ${actionName} before the current action finishes.`);

        try {
            this.isDispatchOngoing = true;
            this.currentAction = this.actions[actionName];

            let result = this.currentAction.execute(this._state, args);

            this.assert(result, `Action ${this.currentActionName} must return either be the new state or an observable (that eventually returns the new state)`);

            // if the action is asynchronous (i.e returns an observable), return also an observable that will provide the new state
            if (result.subscribe) {
                return result.map(newState => {
                    this._state = newState;
                    return newState;
                });
            }
            // if the action is synchronous, return the new state
            else {
                this._state = result;
                return this._state;
            }

        }
        finally {
            this.isDispatchOngoing = false;
        }
    }

    undo() {
        //TODO

        //TODO assert if dispatch is ongoing
    }

    redo() {
        //TODO

        //TODO assert if dispatch is ongoing
    }

    assert(condition, message:String) {
        if (!condition) {
            throw new Error(message);
        }

    }

}