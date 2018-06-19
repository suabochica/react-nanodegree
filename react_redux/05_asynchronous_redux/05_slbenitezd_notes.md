Asynchronous Redux
==================

Intro
-----

In this lesson, we're going to be working with a (simulated) remote database. We'll use a provided API to interact with this database.

The important skill that you'll be learning in this lesson is how to make asynchronous requests in Redux. If you recall, the way Redux works right now is:

- `store.dispatch()` calls are made
- If the Redux store was set up with any middleware, those functions are run
- Then the reducer is invoked

But how do we handle the case where we need to interact with an external API to fetch data. For example, what if our Todos app had a button that would load existing Todos from a database? If we dispatch that action, we currently do not have a way to wait for the list of remote Todo items to be returned.

After going through this lesson, you'll be able to make asynchronous requests and work with remote data in a Redux application.

External Data
-------------

We're going to use a database to interact with our Todos application. We're simulating the database to keep that aspect of the project less complex. This is the HTML script tag you need to add the database to your application:

```js
<script src="https://tylermcginnis.com/goals-todos-api/index.js"></script>
```

> ### Promise-Based API
> The methods in the provided API are all Promise-based. Let's take a look at the `.fetchTodos()` method:
> ```js
> API.fetchTodos = function () {
>  return new Promise((res, rej) => {
>    setTimeout(function () {
>      res(todos);
>    }, 2000);
>  });
>};
> ```
> Here, we are creating and returning a `Promise()` object.
>
> Currently our app makes that the user wait unnecessarily long amount of time while the API fetch all the Todos and all the Goals. Since the API is Promised-based, we can use `Promise.all()` to wait all Promises have resolved before displaying the content to the user.
>
> Promises are asynchronous, therefore we will work with asynchronous data and asynchronous requests.

### Summary
In this section, we looked at how to work with an external API. We added a new action (RECEIVE_DATA), created a new action creator, and built a new reducer...all to handle the different states our app can be in while getting our remote data:

- before the app has the data
- while the app is fetching the data
- after the data has been received

Optimistic Updates
------------------
When dealing with asynchronous requests, there will always be some delay involved. If not taken into consideration, this could cause some weird UI issues. For example, let’s say when a user wants to delete a todo item, that whole process from when the user clicks “delete” to when that item is removed from the database takes two seconds. If you designed the UI to _wait for the confirmation from the server_ to remove the item from the list on the client, your user would click “delete” and then would have to wait for two seconds to see that update in the UI. That’s not the best experience.

Instead what you can do is a technique called *optimistic updates*. Instead of waiting for confirmation from the server, just instantly remove the user from the UI when the user clicks “delete”, then, if the server responds back with an error that the user wasn’t actually deleted, you can add the information back in. This way your user gets that instant feedback from the UI, but, under the hood, the request is still asynchronous.

### Summary
In this section, swapped more functionality over to using the API. We now use the database to:

- remove Todos and Goals
- toggle the state of a Todos
- save a new Todo or Goal

What's important is that for the removing and toggling, we're doing these actions _optimistically_. So we're assuming the change will succeed correctly on the server, so we update the UI immediately, and then only roll back to the original state if the API returns an error. Doing optimistic updates is better because it provides a more realistic and dynamic experience to the user.