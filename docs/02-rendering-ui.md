# Rendering UI with React

Instead of using a string template, React uses JavaScript objects to build the user interface through React elements. This is a fundamental difference between React and other popular JavaScript frameworks. We'll use these React elements to describe what we want the page to look like, and React will be in charge of generating the DOM nodes to achieve the result.

We can even create our own custom elementes called components, that we can use to neatly encapsulate groups of elements and behavior. These components are the building block of React.

## Creating Elements and JSX

We'll be looking at using React `.createElement()` method which have the next signature:

```js
    React.createElement(/* type */, /* props */, /* content */)
```

Let's break down what each item can be:

- `type` – either a string or a React Component: This can be a string of any existing HTML element (e.g. `'p'`, `'span'`, or `'header'`) or you could pass a React component (we'll be creating components with JSX, in just a moment).
- `props` – either null or an object: This is an object of HTML attributes and custom data about the element.
- `content`– null, a string, a React Element, or a React Component: Anything that you pass here will be the content of the rendered element. This can include plain text, JavaScript code, other React elements, etc.

So, what do we mean when we say React elements? To answer this question lets check the next code

```js
import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', null, 'Hello World!');

console.log(element) //-> A JavaScript Object

ReactDOM.render(
    element,
    document.getElementById('root');
)
```

Two important things in the code above:

1. The `.createElement()` method generate a JavaScript object
2. ReactDOM allow us to render the React Elements

ReactDOM is just one way to use the React library. In React, the process of deciding what to render is completely decoupling from actually rendering it. The decoupling makes it possible to render stuff on the server on native devices and even in VR environments.

> In this section we use ReactDOM to working in the browser.

Apps built with React typically have a single root DOM node. For example, an HTML file may contain a `<div>` with the following:

```html
<div id="root"></div>
```

By passing this DOM node into `getElementById()`, React will end up controlling the entirety of its contents. Another way to think about this is that this particular `<div>` will serve as a _"hook"_ for our React app; this is the area where React will take over and render our UI!

Now let's say that we want to give our element a class. To get it, we have to use the second argument of the `.createElement()` that is for properties that we want to give to our DOM node:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', 'className: welcome-message', 'Hello World!');

ReactDOM.render(
    element,
    document.getElementById('root');
)
```

If you remember the React elements describe DOM nodes, not HTML. So, `class` is the name of the HTML attribute. Once the browser parses it and turns it into a real DOM node, the DOM property name is `className`.

When you start to learning React, you might have come across the term _Virtual DOM_. Virtual DOM means is that these aren´t real DOM elements that we´re creating here. Instead, these objects that describe real DOM nodes. So, when we call `.createElement()` We haven't created anything in the DOM yet. It's not until we say render, that the browser creates a real DOM element.

### Nesting

Most user interfaces are represented as views inside other views. React is a library for creating user interfaces, so it´s good at this. An example to illustrate nesting is creating an ordered list.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('ol', null,
    React.createElement('li', null, 'Edward'),
    React.createElement('li', null, 'Alphonse'),
    React.createElement('li', null, 'Hohenheim')
);

ReactDOM.render(
    element,
    document.getElementById('root');
)
```

There, we put our `li` elements in the `content` argument of the `ol` parent element. This is how works nesting in React elements.

This code is fine, but most of the time when you need a list, you'll probably have the items in an array. Instead of writing out child elements one by one, Reacts lets us provide an array of elements to use as children.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const people = [
    { name: 'Edward' },
    { name: 'Alphonse' },
    { name: 'Hohenheim' }
]

const element = React.createElement('ol', null,
    people.map((person) => (
        React.createElement('li', { key: person.name }, person.name),
    ))
);

ReactDOM.render(
    element,
    document.getElementById('root');
)
```

In the above code we'are generating the list dynamically using JavaScript. An advantage if that we didn't need any special syntax (or templating language) to map over the array. Instead we use Array `.map()`.

Another important thing is that the `person` object was already in scope. Again, We didn't need a templating language to give me that concept of scope. We use the `person` object in the JavaScript function scope.

Finally, at the moment of using an array as children, React is going to complain if you don't give it a unique `key` as `property`. Then you have to add `{ key: person.name }` as the second argument in the when you're mapping the array.

> `.createElement()` returns one root element

### JSX

JSX is a syntax extension to JavaScript that let us write JavaScript code that looks similar to HTML, making it more concise and easier to follow. Under the hood, JSX syntax is transpiled to the `.createElement()` method of React API. The next code use JSX syntax to get the same result that we get in our last code:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const people = [
    { name: 'Edward' },
    { name: 'Alphonse' },
    { name: 'Hohenheim' }
]

const element = <ol>
    {people.map((person) => (
        <li key={person.name}>{person.name}</li>
    ))}
</ol>

ReactDOM.render(
    element,
    document.getElementById('root');
)
```

When writing JSX, keep in mind that it must only return a single element (same as `.createElement`). This element may have any number of descendants, but there must be a single root element wrapping your overall JSX. If you don't respect this hierarchy, React will give the next error:

> Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag

Since we know that JSX is really just a syntax extension for `.createElement()`, this makes sense; `.createElement()` takes in only one tag name (as a string) as its first argument.

### Intro to Components

Typically, though, we'll use one of React's key features, Components, to construct our UI. Components refer to _reusable_ pieces of code ultimately responsible for returning HTML to be rendered onto the page. More often than not, you'll see React components written with JSX.

Since React's main focus is to streamline building our app's UI, there is only one method that is absolutely required in any React component class: `render()`.

Let's go ahead and build our first components class:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

class ContactList extends React.Component {
    render() {
        const people = [
            { name: 'Edward' },
            { name: 'Alphonse' },
            { name: 'Hohenheim' }
        ]

        return <ol>
            {people.map((person) => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>
    }
}

ReactDOM.render(
    <ContactList />
    document.getElementById('root');
)
```

In the previous video, we defined the `ContactList` component like so:

```javascript
class ContactList extends React.Component {
// ...
}
```

In other words, we are defining a component that's really just a JavaScript class that inherits from `React.Component`.

In real-world use (and throughout this course), you may also see declarations like:

```javascript
class ContactList extends Component {
// ...
}
```

Both ways are functionally the same, but be sure your module imports match accordingly! That is, if you choose to declare components like the example directly above, your import from React will now look like:

```javascript
import React, { Component } from 'react';
```

### Creating Elements Recap

In the end, remember that React is only concerned with the View layer of our app. This is what the user sees and interacts with. As such, we can use `.createElement()` to render HTML onto a document. More often than not, however, you'll use a syntax extension to describe what your UI should look like. This syntax extension is known as JSX, and just looks similar to plain HTML written right into a JavaScript file. The JSX gets compiled down to calls to React's `.createElement()` method that outputs HTML to be rendered in the browser.

A great mindset to have when building React apps is to think in `components`. Components represent the modularity and reusability of React. You can think of your component classes as factories that produce instances of components. These component classes should follow the _single responsibility principle_ and just "do one thing". If it manages too many different tasks, it may be a good idea to decompose your component into smaller subcomponents.

### Further Research:

- [Rendering Elements](https://facebook.github.io/react/docs/rendering-elements.html) from the React docs

---

## Create React App

JSX is awesome, but it does need to be transpiled into regular JavaScript before reaching the browser. We typically use a transpiler like Babel to accomplish this for us. We can run [Babel](https://github.com/babel/babel) through a build tool, like [Webpack](https://github.com/facebookincubator/create-react-app) which helps bundle all of our assets (JavaScript files, CSS, images, etc.) for web projects.

To streamline these initial configurations, we can use Facebook's Create React App package to manage all the setup for us! This tool is incredibly helpful to get started in building a React app, as it sets up everything we need with _zero configuration!_ Install Create React App (through the command-line with `npm`), and then we can walk through what makes it so great.

```sh
    npm install -g create-react-app
```

This package will install:

- react
- react-dom
- react-scripts

`react-scripts` encapsulates the next powerful libraries:

- Babel: To use the latest JavaScript syntax as well as JSX
- Webpack: To generate the build
- Webpack Dev Server: which gives us the auto-reload behavior

### The Yarn Package Manager

>[Yarn](https://yarnpkg.com/en/) is a package manager that's similar to NPM. Yarn was created from the ground up by Facebook to improve on some key aspects that are slow or lacking in NPM.

Checking the project structure generated by `creact-react-app` package, you noticed that in the `index.js` file it is included the line `registerServiceWorker()`. You can remove it, because we're not using Service Workers in this project.

### `create-react-app` Recap

Facebook's `create-react-app` is a command-line tool that scaffolds a React application. Using this, there is no need to install or configure module bundlers like Webpack, or transpilers like Babel. These come preconfigured (and hidden) with `create-react-app`, so you can jump right into building your app!

## Composing with components

Components are the building blocks of React. But, what does it means?. If you look the API and the documentation of React, they're small, and the majority of React's API is all about components.

> Components are the main unit of encapsulation that React give us.

Components help us break down the UI into smaller pieces. These pieces have clear responsibilities and well-defined interfaces. This is valuable when building a large app because it lets us work in tiny pieces of the app without affecting the rest of it.

For other side, components encourage us to build applications using composition instead of inheritance. Let's check an example of composition with our `ContactList` components:

```javascript
class ContactList extends React.Component {
    render() {
        const people = this.props.contacts;

        return <ol>
            {people.map((person) => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <ContactList contacts={[
                    { name: 'Edward' },
                    { name: 'Alphonse' },
                    { name: 'Hohenheim' }
                ]} />
                <ContactList contacts={[
                    { name: 'Mao' },
                    { name: 'Ling Yao' },
                    { name: 'Lan Fan' }
                ]} />
            </div>
        );
    }
}
```

The important changes in the above code are:

1. Use the `this.props.contacts` to avoid the harcode array of the contact list.
2. Create in the element a property `contact` with our respective array.

This way we can reuse the `ContactList` component with different content.

### Favor Composition Over Inheritance

You might have heard before that it’s better to _favor composition over inheritance_. This is a principle that I believe is difficult to learn today. Many of the most popular programming languages make extensive use of inheritance, and it has carried over into popular UI frameworks like the Android and iOS SDKs.

In contrast, React uses composition to build user interfaces. Yes, we extend React.Component, but we never extend it more than once. Instead of extending base components to add more UI or behavior, we compose elements in different ways using nesting and props. You ultimately want your UI components to be independent, focused, and reusable.

So if you’ve never understood what it means to “favor composition over inheritance” you’ll definitely learn using React!

## What is next?

Now it is time to talk about how each component can hold an manage his own state.
