

import {Map} from 'immutable';

export class ImmutableObject<M extends ImmutableObject> {

    _data: Map;

    constructor(properties: Object) {
        this._data = Map(properties);
        ImmutableObject.initModel(this);
    }

    toJS() {
        return this._data.toJS();
    }

    static from(original: M, differences: Object): M {

        //TODO basic validation

        let copiedModel = <M> {
            _data: original._data.merge(differences)
        };
        ImmutableObject.initModel(copiedModel);
        return copiedModel;
    }

    private static initModel(model: M) {

        //TODO basic validation

        let keys: string[] = <string[]>model._data.keySeq().toArray();

        keys.forEach( (property) => {
            Object.defineProperty(model, property, {
                get: () => model._data.get(property)
            });
        });

    }


}