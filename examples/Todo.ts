
import {ImmutableModel} from 'ng2-store';

export class Todo extends ImmutableModel {

    constructor(id: number, description:string, completed: boolean = false) {
        super({id, description, completed});
    }

}