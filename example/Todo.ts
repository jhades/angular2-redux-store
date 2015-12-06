
import {List,Record} from 'immutable';

const TodoRecord = Record({
    id: 0,
    description: "",
    completed: false
});

export class Todo extends TodoRecord {


    constructor(props) {
        super(props);
    }

}