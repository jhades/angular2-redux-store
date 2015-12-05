
import {ImmutableObject} from './ImmutableObject';
import {List} from 'immutable';

export class Todo extends ImmutableObject {

    id:number;
    description:string;
    completed:boolean;

    constructor(id: number, description:string, completed: boolean = false) {
        super({id, description, completed});
    }

    static fromJson({id,description, completed}): Todo {
        return new Todo(id, description, completed);
    }

    static fromJsonList(todos: Object[]) {
        return List(todos.map(Todo.fromJson));
    }

    static fromHttpResponse(res) {
        return Todo.fromJsonList(res.json());
    }

}