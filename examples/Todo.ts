
import {ImmutableObject} from 'ng2-store';

export class Todo extends ImmutableObject<Todo> {

    id:number;
    description:string;
    completed:boolean;

    constructor(id: number, description:string, completed: boolean = false) {
        super({id, description, completed});
    }

}