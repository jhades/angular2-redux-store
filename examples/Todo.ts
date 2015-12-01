
import {ImmutableObject} from 'ng2-store';
import {List} from 'immutable';

export class Todo extends ImmutableObject<Todo> {

    id:number;
    description:string;
    completed:boolean;

    constructor(id: number, description:string, completed: boolean = false) {
        super({id, description, completed});
    }

    static fromJson({id,description, completed}): Todo {
        return new Todo(id, description, completed);
    }

    static fromJsonList(todos: Array) {
        return List(todos.map(Todo.fromJson));
    }


}