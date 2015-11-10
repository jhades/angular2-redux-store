
export abstract class Ng2Store<S> {

    actions: {[actionName: string]: Function} = {};

    abstract getState(): S;

    register(actionName: string, callback: Function) {
        debugger;
        this.actions[actionName] = callback;
    }

    dispatch(actionName: string, args: Object)  {
        debugger;
        this.actions[actionName](args);
    }

    undo() {
        //TODO
    }

    redo() {
        //TODO
    }

}