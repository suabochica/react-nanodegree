# State Management

It's time to introduce three concepts in our React learning:

1. **Props:** Allow you to pass data into your components.
2. **Functional Components:** An alternative, and probably more intuitive approach to creating components.
3. **Controlled Components:** Allow you to hook up the forms in your application to your component state.

Before to start with our Contact app you should remove default files installed with `create-react-app` command.

### The Backend Server

The Contacts app project that we're building is a front-end project. However, we'll eventually be storing the contacts on a backend server. Since we're only really focusing on the front-end for this course, we've gone ahead and built this server for you so you can focus on just the React parts of this program.

The server is a simple Node/Express app that it is stored in the `contacts-app/reactnd-contacts-server2` path. Once you've started the server, you can forget about it. The Contacts project we're working on will interact with this server, but we won't ever modify any of the server code.

> ### Running Two Servers
> At this point, you should be running two different servers on your local machine:
> - Front-end development server: Accessible on **port 3000** (with `npm start` or `yarn start`)
> - Back-end server: Accessible on **port 5001** (with `node server.js`) Please be sure that both are running before moving on in this Lesson.

## Pass Data Into Components With Props

A good analogy to understand how works component `props` in React is with functions. Lets check:

```javascript
function fetchUser(username) {
    // ajax call
}

fetchUser('Edward');
```

The goal of the `fetchUser()` function is to fetch a specific user. Then, we have to tell the function which user to fetch. It is the reason why we pass the `username` parameter in the function definition. When the function is invoked, you have to pass the respective username.

In React, the same intuition you have about functions can also be applied to React components:

```javascript
function User extends React.Component {
    render() {
        return {
            <p>Username: {this.props.username}</p>
        }
    }
}

<User username='Edward'/>
```
The whole purpose of the `<User />` component is to display a user to the UI. Then we need a way to pass the user component a username so it knows which user to display. Then, we can add a custom attribute to our component and give it a value. In our component definition we can access to this value through `this.props.username`.

In fact, any attributes that are added to a component will be accessable on the `props` object from inside of that component.

### Pass Data With Props Recap
A `prop` is any input that you pass to a React component. Just like an HTML attribute, a `prop` name and value are added to the Component.

```javascript
// passing a prop to a component
<LogoutBytton text="Wanna log out?">
```

In the code above, `text` is the `prop` and the string `'Wanna log out?'` is the value.

All props are stored on the `this.props object`. So to access this `text prop` from _inside_ the component, we'd use `this.props.text`:

```javascript
// access the prop inside the component
...
render() {
    return <div>{this.prop.text}</div>
}
...
```