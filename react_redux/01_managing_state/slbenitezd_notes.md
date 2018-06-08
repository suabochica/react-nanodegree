Managing State
==============

State mismanagement causes some bugs. This means that your application was expecting the state to be one thing, but it is something else. The goal of _Redux_ is to make state management in any app you build, more predictable to achieve quality improvement.

The Store
---------

A traditional app has the application's data is sprinkled throughout the app. Redux's purpose store the app references the application data outside of the app and. With a change like this, if the data needs to be modified at all, then all of the data is located in one place and needs to be only changed once. Then the areas of the app that are referencing pieces of data will be updated since the source they're pulling from has changed.

The concept of putting all the state in a single location is called _State tree_

State Tree
----------

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