

import {MiddlewareChain} from "./MiddlewareChain";
import {Ng2StoreAction} from "./Ng2StoreAction";

export interface Ng2StoreMiddleware<S> {

    execute(state: S, action: Ng2StoreAction, chain: MiddlewareChain);

}
