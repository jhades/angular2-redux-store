
import {Map} from 'immutable';

export class Todo {

    _data: Map;

    constructor(id: number, description:string, completed: boolean = false) {
        this._data = Map({id, description, completed});
    }

    get id() {
        return this._data.get('id');
    }

    get description() {
        return this._data.get('description');
    }

    get completed() {
        return this._data.get('completed');
    }

}