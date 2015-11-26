
import {Observable} from "angular2/angular2";

export interface Ng2StoreAction<S> {

    execute(state: S, args: Object) : S | Observable<S>;

}