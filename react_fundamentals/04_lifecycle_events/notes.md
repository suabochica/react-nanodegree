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