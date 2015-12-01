
import {immutableObject} from 'ng2-store';

export class Todo extends immutableObject<Todo> {

    id:number;
    description:string;
    completed:boolean;

    constructor(id: number, description:string, completed: boolean = false) {
        super({id, description, completed});
    }

}