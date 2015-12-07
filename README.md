
# Angular2 Redux Store

A minimalistic Redux Store for building Angular 2 apps using a Flux-like one way binding architecture.

Contains an example that shows how a Flux-like app can be built using Angular 2, Redux and Immutable.js. Shows how type-safe immutable classes can be defined while using Immutable.js in a Typescript enviromment.

Check this post for a more detailed explanation:

[Angular 2 Application Architecture -Building Flux-like apps using Redux and Immutability.js](TODO)


### The Gist

Redux makes for a really good fit for building applications in Angular 2. The idea of building apps using a Flux-like architecture is to isolate the state of the application inside a store, so we can better control it. The [redux docs](http://redux.js.org/) are a great reference point for understanding Flux.

Redux provides a very intuitive and easy to use data store that is getting a lot of traction. We just need a way to conveniently use it in an Angular 2 app, and that's where the Angular 2 Redux Store comes in.

### The Angular 2 Redux Store

To add a redux store to an Angular 2 app, simply do this:

```js
import {ReduxStore} from "ng2-redux-store";

let store = createStore(todoReducers, List([]));

@Injectable()
export class TodoStore extends ReduxStore {

    constructor() {
        super(store);
    }

}
```

You can create the store anyway you like, using any of the Redux middleware available. In this case only a simple store was created. A TodoStore class is created, that needs to be added to the root boostrap call of the app:

```js
bootstrap(App, [
    HTTP_PROVIDERS,
    TodoService,
    TodoStore
]);
```

The redux store can now be injected in any part of the app that needs it:

```js
export class TodoList {

    constructor(private store: TodoStore) {
    }
    
    toggleTodo(todo) {
        this.store.dispatch(toggleTodo(todo));
    }
}
```

The toggleTodo method is an example of an action creator, see the [redux documentation](http://redux.js.org/docs/basics/Actions.html) for more details.

### How the The Redux API is exposed

A redux store has an API made of 3 methods: getState(), dispatch() and subscribe(). The TodoStore in this example exposes two of those methods directly: getState() and dispatch(). These two methods are delegated directly to the flux store.

For the subscribe functionality,  in an similar way to the Angular 2 Forms API and other parts of Agnular an observable is exposed that the user can subscribe to:

```js
todoStore.value.subscribe(
   state => console.log('Received new store state: ' + state);
);
```
With this the user received a stream of store values that can be processed all the power of the functional reactive programming primitives provided by the RxJs Observables library used by Angular.

### Using the Angular 2 Redux Store

You can install this library and include it as a dependency, together with Angular 2 and Redux:

    npm install -S angular2 redux angular2-redux-store
    
### Running the sample app

This project contains a sample Todo app built using Angular 2, Redux and this library. To run it, open a terminal and run:

    npm run watch
    
Then open a second terminal and run:

    npm start
    
### Redux and Immutability
Altough redux does not enforce any immutability library, its important to use one so that we have the strong guarantee that the state that comes out of the store cannot be tampered with in any way by the component tree. 

This library does not impose any specific immutability library either. But have a look at immutability.js as with it its possible to define classes that are immutable and still keep the benefits of type-safety in a Typescript environment. This is how an immutable Todo class can be defined:

```js
import {List,Record} from 'immutable';

const TodoRecord = Record({
    id: 0,
    description: "",
    completed: false
});

export class Todo extends TodoRecord {

    id:number;
    description:string;
    completed: boolean;

    constructor(props) {
        super(props);
    }
}
```

### License

[MIT](https://opensource.org/licenses/MIT)
