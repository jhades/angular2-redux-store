
export abstract class Ng2Store<S> {

    actions: {[actionName: string]: Function} = {};

    abstract getState(): S;

    register(actionName: string, callback: Function) {
        this.actions[actionName] = callback;
    }

    dispatch(actionName: string, args: Object)  {
        this.actions[actionName].call(this, args);
    }

    undo() {
        //TODO
    }

    redo() {
        //TODO
    }

}