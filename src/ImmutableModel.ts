

import {Map} from 'immutable';

export class Ng2StoreModel {

    _data: Map;

    constructor(properties: Object) {
        this._data = Map(properties);
        Object.keys(properties).forEach(property => {
            this.__defineGetter__(property, () => this._data.get(property));
        });
    }

}