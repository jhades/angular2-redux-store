
import {Map} from 'immutable';

export class Todo {


    _data: Map;

    constructor(description:string, status: boolean = false) {
        this._data = Map({description, status});
    }

    get description() {
        return this._data.get('description');
    }

    get status() {
        return this._data.get('status');
    }

}