Managing State
==============

State mismanagement causes some bugs. This means that your application was expecting the state to be one thing, but it is something else. The goal of _Redux_ is to make state management in any app you build, more predictable to achieve quality improvement.

The Store
---------

A traditional app has the application's data is sprinkled throughout the app. Redux's purpose store the app references the application data outside of the app and. With a change like this, if the data needs to be modified at all, then all of the data is located in one place and needs to be only changed once. Then the areas of the app that are referencing pieces of data will be updated since the source they're pulling from has changed.

The concept of putting all the state in a single location is called _State tree_

### State Tree

To start the understanding of the State Tree, let's check an example:

```js
{
    recipes: [
        { … },
        { … },
        { … }
    ],
    ingredients: [
        { … },
        { … },
        { … },
        { … },
        { … },
        { … }
    ],
    products: [
        { … },
        { … },
        { … },
        { … }
    ]
}
```

See how all the data of this imaginary cooking site is all in a single object. This also means that the state of the site is stored in one single location. So, the _State Tree_ is saving all the data in a single object. The state tree concept is symbolized with a triangle.

Now that all state is stored in one location, we have to figure out how to interact with it. Exist three ways to communicate with the state tree:

1. Getting the state
2. Listening for changes to the state
3. Updating the state

Then we combine the three items above and the state tree object itself into one unit which we called _the store_. We'll look at creating this store in the next section.

Creating Store
--------------

Remember that the store has the following information:

- The state tree
- A way to get the state tree
- A way to listen and respond to the state changing
- A way to update the state

To create the store, we will create a factory function that creates _store_ objects. Then we'll have the store keep track of the state, and we'll write the method to get the state from the store.

```js
function createStore() {
    let state;

    const getState = () => {
        return state;
    }

    return getState;
}
```

With this advance our `createStore()` factory function is currently:

- No takes arguments
- Sets up a local private variable to hold the sate
- Sets up a `getState()` function
- retrun an object that publicly exposes the `getState()` function

The `getState()` function returns the existing state variable.

Our next task is to listen for changes the state. To listen to the changes we add a `subscribe()` method to the factory function where will able subscribe a callback function called `listener`. Thereby, whenever the state changes internally, we can invoke the callback function and then the user cloud do anything they want.

```js
function createStore() {
    let state;
    let listeners = [];

    const getState = () => {
        return state;
    }

    const subscribe = (listener) => {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter((unsubscribeListener) => unsubscribeListener !== listener);
        }
    }

    return {
        getState,
        subscribe
    }
}

const store = createStore();
store.subscribe(() => {
    console.log('The new state is', store.getStore());
})

const unsubscribe = store.subscribe = store.subscribe(() => {
    console.log('The store changed')
})
```

In the last snippet we can see that the `subscribe()` method handle the functionality of subscribing a callback function passed when is invoked in the listeners' array. Keep in mind that the user can subscribe more than one time. Similarly, we have to enable the possibility of unsubscribing for changes.

Before to go deep in the update state part, we will recap the goal of Redux: Increase the predictability of the state in our application. Therefore, we can't allow anything to update the state, because if we did it, that would drastically decrease predictability. So we have to establish a strict set of rules that guarantee us to increase predictability regarding updating the state. The first rule is:

> Only an event can change the state of the store.

Now, let's define what an _event_ is. An event is a source that produces a change of state. We can represent an event as part of an object. When an event takes place in a Redux app, we use a plain JavaScript object to keep track of what the specific event was. This object is called an **Action**. Next snippet is an example of an action:

```js
{
    type: "ADD_PRODUCT_TO_CART"
}
```

As you can see, an Action is just a plain JavaScript object. What makes this plain JavaScript object unique in Redux, is that every Action must have a `type` property. The purpose of the `type` property is to let our app (Redux) know what event just took place. Since an  Action is just a regular object, we can include extra data about the event that took place:

```js
{
    type: "ADD_PRODUCT_TO_CART",
    productId: 21
}
```

In this Action, we include the `productId` field. Now we know which product was added to the store. Nevertheless, in Action objects, it's better practice to pass as little data as possible in each action. That is, prefer passing the index or ID of a product rather than the _entire product object_ itself.

See now how bright are the Actions in Redux.