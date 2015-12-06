
# Angular2 Redux Store

A minimalistic Redux Store for building Angular 2 apps using a Flux-like one way binding architecture.

Contains an example that shows how a Flux-like app can be built using Angular 2, Redux and Immutable.js. Shows how type-safety can still be kept while using Immutable.js in a Typescript enviromment.

### The Gist

Redux makes for a really good fit for building Apps in Angular 2. The idea of building apps using a Flux-like architecture is to isolate the state of the application inside a single store, so we can better control it. 

Redux provides a very intuitive and easy data store that is getting a lot of traction. We just need a way to conveniently use it in an Angular 2 app, and that's when the Angular 2 Redux Store comes in to help.

### The Angular 2 Redux Store

To add a redux store to an Angular 2 app, simply do this:

```js
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

    constructor(store: TodoStore) {

    }
}
```

### How the The Redux API is exposed

a redux store has a minimal API of 3 methods: getState(), dispatch() and subscribe. The TodoStore in this example exposes two of those methods directly: getState() and dispatch(). These two methods are delegated directly to the flux store.

For the subscribe functionality,  in an similar way to the Angular 2 Forms API and other parts of Agnular an observable is exposed that the user can subscribe to:

```js
todoStore.value.subscribe(
   state => console.log('Received new store state: ' + state);
);
```
With this the user received a stream of store values that can be processed all the power of the functional reactive programming primitives provided by the RxJs Observables library used by Angular.







