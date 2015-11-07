
import {Map} from 'immutable';

export class Todo {


    _data: Map;

    constructor(description:string, completed: boolean = false) {
        this._data = Map({description, completed});
    }

    get description() {
        return this._data.get('description');
    }

    get completed() {
        return this._data.get('completed');
    }

}