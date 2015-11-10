
export abstract class Ng2Store<S> {

    actions: {[actionName: string]: Function} = {};

    abstract getState(): S;

    registerAction(actionName: string, callback: Function) {
        debugger;
        this.actions[actionName] = callback;
    }

    executeAction(actionName: string, args: Object)  {
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