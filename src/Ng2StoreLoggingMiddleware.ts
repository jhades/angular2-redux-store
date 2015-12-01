
import {Ng2StoreMiddleware} from "./Ng2StoreMiddleware";
import {MiddlewareChain} from "./MiddlewareChain";

export class Ng2StoreLoggingMiddleware implements Ng2StoreMiddleware<any> {

    execute(state, action, chain:MiddlewareChain) { 

        console.log("State Before: " + state.toJson());

        chain.execute(state);

        console.log("State After: " + state.toJson());

    }

}