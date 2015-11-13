

export interface Ng2StoreAction<S> {

    execute(state: S, args: Object): S;

}