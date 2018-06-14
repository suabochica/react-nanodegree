Redux Middleware
================

So far, we have the next three concepts as the foundation of Redux:

- Store
- Actions
- Reducers

In this lesson we will deep into Redux Middleware. Check how it allows us to hook into the Redux lifecycle and why that is beneficial.

To start the review of Redux Middleware, imagine that you want to add as a to do or a goal the task of invest in Bitcoin. However, your financial adviser keeps insisting that is a bad idea. So we decide to add a new feature to our To Do app that whenever we add a item or a new goal that contains the 'Bitcoin' word, then instead of adding it to the individual list the app will alert that is a bad idea add the item.

To achieve this description, we should hook into the moment after an action is dispatched, but before it ever hits the reducer and modifies the state. Then add the momento of create the store we will add the next function:

```js
function checkAndDispatch (store, action) {
    if (
        action.type === ADD_TODO &&
        action.todo.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope, that's a bad idea");
    } if (
        action.type === ADD_GOAL &&
        action.goal.name.toLowerCase().includes('bitcoin')
    ) {
        return alert("Nope, that's a bad idea");
    }

    return store.dispatch(action);
}
```

Finally, we have to use `checkAndDispatch()` function instead of the regular `dispatch()` function. With this changes, we can't add items to the lists that contains the 'Bitcoin' word.
