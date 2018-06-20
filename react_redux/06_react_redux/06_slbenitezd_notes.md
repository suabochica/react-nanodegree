React-Redux
===========

Intro
-----

At this point, it is clear that Resux is not coupled to React at all. You can build a fully-fledged app using Redux at any Vue library. Howevere, Redux was built with React in mind, and there are some steps we can take in our app to make the experience between the two technologies a littel more seamless.

Connect & Provider
------------------

As you seen, Redux doesn't have any relation to React. React is another UI library that can leverage Redux for more predictable state management. Looking at our own implementation of React and Redux together, the real _key is that we are passing down our store as a prop and utilizing it to get the state `dispatch()` or `subscribe()` whenever we need to._ The whole goal of our abstraction should be making the store's three responsabilities work as seamlessly with react as possible.

### Getting the Store to Each Component

