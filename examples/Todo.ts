
import {ImmutableObject} from './ImmutableObject';
import {List} from 'immutable';

export class Todo extends ImmutableObject {

    id:number;
    description:string;
    completed:boolean;

    constructor(id: number, description:string, completed: boolean = false) {
        super({id, description, completed});
    }


}