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

            this.assert(result, `Action ${this.currentActionName} must return either the new state or an observable (that returns the new state eventually).`);

            if (result.subscribe) {
                result.subscribe(
                    newState => this._state = newState,
                    error => console.log(error) //TODO
                );
            }
            else {
                this._state = result;
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