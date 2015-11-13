
import {Ng2StoreModel} from 'ng2-store';

export class Todo extends Ng2StoreModel {

    id:number;
    description:string;
    completed:boolean;

    constructor(id: number, description:string, completed: boolean = false) {
        super({id, description, completed});
    }

}