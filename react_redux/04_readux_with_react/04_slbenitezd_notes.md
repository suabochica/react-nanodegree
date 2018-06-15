Readux with React
=================

Intro
-----

Redux can be user with:

- React apps
- Vue apps
- Plain HTML apps
- Vanilla JavaScript apps

In this lesson we will look at how we could hook Redux up to an app that uses Rects fot its UI.

React as UI
-----------

It´s time to move the TODO application being plain HTML and convert it to being powered by React. To do that, we will nee to add:

- react
- react-dom
- babel

The changes we've just implemented should look pretty familiar - they were just converting parts of our app from HTML to being powered by React Components.

### Combining React and Redux

Alrighty, so you've learned React. You've built Redux and used it in a regular HTML application. But now we've started converting that HTML to a React application. It is time to connect the _React Components_ to the _Redux Store_.

It is important notice two things:

- Where the `store.dispatch()` code goes in the React component
- How the React component is passed the Redux store as a prop

