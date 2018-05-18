# Lifecycle Events

## Introduction

### `render()` Is For Rendering, Only!
An important thing to highlight; **data should not be fetched in the `render()` method!**. A component's `render()` method should _only_ be used to render that component; it should not make any HTTP requests, fetch data that's used to display the content, or alter the DOM. The `render()` method also shouldn't call any other functions that do any of these things, either.

So, if `render()` is only used for displaying content, we put the code that should handle things like Ajax requests in what React calls **lifecycle events**.

### Lifecycle Events
Lifecycle events are specially named methods in a component. These methods are automatically bound to the component instance, and React will call these methods naturally at certain times during the life of a component. There are a number of different lifecycle events, but here are the most commonly used ones.

- `componentDidMount()`: invoked immediately _after_ the component is _inserted_ into the DOM
- `componentWillUnmount()`: invoked immediately _before_ a component is _removed_ from the DOM
- `getDerivedStateFromProps()`: invoked after a component is instantiated as well as when it receives brand new props

To use one of these, you'd just create a method in your component with the name and React will call it. It's an easy way to hook into different parts of the lifecycle of React components.

The lifecycle event that we'll be looking at (and will be using a lot in our app!) is the `componentDidMount()` lifecycle event.

## `componentDidMount()` Lifecycle Event

### How Works
If you remember from the previous section, `componentDidMount()` is the lifecycle hook that is run right after the component is added to the DOM and should be used if you're fetching remote data or doing an Ajax request. Here's what the React docs have to say about it:

> `componentDidMount()` is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.

Let's take a look at the User component:

```js
import React, { Component } from 'react';
import fetchUser from '../utils/UserAPI';

class User extends Component {
    constructor(props) {
    super(props);

        this.state = {
            name: '',
            age: ''
        };
    }

    componentDidMount() {
        fetchUser().then((user) => this.setState({
            name: user.name,
            age: user.age
        }));
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
            </div>
        );
    }
}

export default User;
```

You'll notice that this component has a `componentDidMount()` lifecycle event. This component seems pretty straightforward, but let's walk through the order of how it works:

1. The `render()` method is called which updates the page with a `<div>` that has one paragraph for the name and one paragraph for the age. What's important to realize is that `this.state.name` and `this.state.age` are empty strings (at first), so the name and age _don't actually display_
2. Once the component has been mounted, the `componentDidMount()` lifecycle event occurs
    - The `fetchUser` request from the `UserAPI` is run which sends a request to the user database
    - When the data is returned, `setState()` is called and updates the `name` and `age` properties
3. Since the state has changed, `render()` gets called again. This re-renders the page, but now `this.state.name` and `this.state.age` have values

### `componentDidMount()` Recap
`componentDidMount()` is one of a number of lifecycle events that React offers. `componentDidMount()` gets called after the component is "mounted" (which means after it is rendered). If you need to dynamically fetch data or run an Ajax request, you should do it in `componentDidMount()`.

### Further Research
- [`componentDidMount()`](https://facebook.github.io/react/docs/react-component.html#componentdidmount) from the React Docs

## Lesson Summary

To recap, lifecycle events are special methods that React provides that allow us to hook into different points in a component's life to run some code. Now there are a number of different lifecycle events and they will run at different points, but we can break them down into three distinct categories:

### Adding to the DOM
These lifecycle events are called when a component is being added to the DOM:

- `constructor()`
- `componentWillMount()`
- `render()`
- `componentDidMount()`

###Re-rendering
These lifecycle events are called when a component is re-rendered to the DOM

- `componentWillReceiveProps()`
- `shouldComponentUpdate()`
- `componentWillUpdate()`
- `render()`
- `componentDidUpdate()`

## Removing from the DOM
This lifecycle event is called when a component is being removed from the DOM

- `componentWillUnmount()`

It's easier to tell where all of these fit together with the following graphic:

![The React Lifecycle Events listed out where they fall in a component's life](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/March/5abae243_nd019-c1-l4-lifecycle-events/nd019-c1-l4-lifecycle-events.png)

Starting from the top left of the image, everything starts when ReactDOM renders the component.

As you can see, between the list and this graphic there are a number of different lifecycle events. However, the most commonly used ones are `componentDidMount()`, `componentWillMount()`, `componentWillUnmount()`, and `componentWillReceiveProps()`.

### Further Research
- [Component Lifecycles](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle) from the React Docs