
import {Ng2StoreModel} from 'ng2-store';

export class Todo extends Ng2StoreModel {

    constructor(id: number, description:string, completed: boolean = false) {
        super({id, description, completed});
    }

}