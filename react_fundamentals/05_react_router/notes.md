# React Router

Before start with React Router lets check the **Single Page Applicatons** concept.

## React Router Intro
In a _traditional Web app_, every time the app calls the server, the server renders a new HTML page. This triggers a page refresh in the browser. If you’ve ever written a Web Forms application this page lifecycle should look familiar.

In an _SPA_, after the first page loads, all interaction with the server happens through _AJAX calls_. These AJAX calls return data—not markup—usually in JSON format. The app uses the JSON data to update the page dynamically, without reloading the page. The next figure shows the two lifecycle approaches.

![](https://i-msdn.sec.s-msft.com/dynimg/IC690875.png)

### SinglePage Applications

> **Single-Page Applications (SPAs)** are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app.

SPAs use _AJAX_ and _HTML5_ to create fluid and responsive Web apps, without constant page reloads. However, this means much of the work happens on the client side, in JavaScript.

Single-page applications can work in different ways. One way a single-page app loads is by downloading _the entire_ site's contents all at once. This way, when you're navigating around on the site, everything is already available to the browser, and it doesn't need to refresh the page. Another way single-page apps work is by downloading everything that's needed to render the page the user requested. Then when the user navigates to a new page, asynchronous JavaScript requests are made for just the content that was requested.

Another key factor in a good single-page app is that the URL controls the page content. Single-page applications are highly interactive, and users want to be able to get back to a certain state using just the URL. Why is this important? **Bookmarkability!**, When you bookmark a site, that bookmark is only a URL, it doesn't record the state of that page.

Have you noticed that any of the actions you perform in the app do not update the page's URL? We need to create React applications that offer bookmarkable pages.

### React Router
React Router turns React projects into single-page applications. It does this by providing a number of specialized components that manage the creation of links, manage the app's URL, provide transitions when navigating between different URL locations, and so much more.

According to the React Router website:

> React Router is a collection of navigational components that compose declaratively with your application.

In the next section, we'll dynamically render content to the page based on a value in the project's this.state object. We'll use this basic example as an idea of how React Router works by controlling what's being seen via state. Then we'll switch over to using React Router. We'll walk you through installing React Router, adding it to the project, and hooking everything together so it can manage your links and URLs.

## Dynamic Render Page

To enable in the contact-app dynamic render pages, lets add a new feature to add contacts. To achieve it, lets create a standalone component. Remember that React favors composing components together. So we want to create our new piece of UI as a standalone component and use composition to include it in another component.

Evaluating this feature, We don't want the form to display all of the time, so we'll start out by having the form show up only if a setting is enabled. We'll store this setting in `this.state`. Doing it this way will give us an idea of how React Router functions.

### Short-circuit Evaluation Syntax
To handling routes by own, we used somewhat odd looking syntax in our `render()`function of the `App.js` file inside the contact-app project:

```js
    {this.state.screen === 'list' && (
    <ListContacts
    contacts={this.state.contacts}
    onDeleteContact={this.removeContact}
    />
)};
```

and

```js
    {this.state.screen === 'create' && (
        <CreateContact />
    )}
```
This can be a little confusing with both the JSX code for a component and the code to run an expression. But this is really just the logical expression `&&`:

    expression && expression

What we're using here is a JavaScript technique called **short-circuit evaluation**. If the first expression evaluates to `true`, then the second expression is run. However, if the first expression evaluates to `false`, then the second expression is skipped. We're using this as a guard to first verify the value of `this.state.screen` before displaying the correct component.

For a deeper dive into this, check out [the short-circuit evaluation info on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation).

### Dynamic Routing Recap
In the code we added in this section, we tried our attempt at using `state` to control what content displays to the user. We saw things break down, though, when we used the back button.

Now, let's switch over to using React Router to manage our app's screens.

## The BrowserRouter Component
As we've just seen, when the user presses the 'back' button in the browser, they will probably have to refresh the page to see the proper content at that location. This isn't the best experience for our user! When we update location, we can update the app as well using JavaScript. This is where React Router comes in.

### Install React Router
To use React Router in our app, we need to install [react-router-dom](https://www.npmjs.com/package/react-router-dom)

    npm install --save react-router-dom

> Please note that the las word used is `dom`. We have to do this highlight, because also exist a package `react-router-native`

### Browser Router
The Browser Router component it's going to listen for changes in the URL and the make sure the correct screen shows up whenever the URL changes

What's nice about React Router is that everything is just a component. This makes using it nice, but it also makes diving into the code more convenient as well. Let's take a look at what exactly BrowserRouter is doing under the hood.

```js
class BrowserRouter extends React.Component {
    static propTypes = {
        basename: PropTypes.string,
        forceRefresh: PropTypes.bool,
        getUserConfirmation: PropTypes.func,
        keyLength: PropTypes.number,
        children: PropTypes.node
    }

    history = createHistory(this.props)

    render() {
        return <Router history={this.history} children={this.props.children} />
    }
}
```

When you use `BrowserRouter`, what you're really doing is rendering a `Router` component and passing it a history prop. `history` comes from the [history library](https://github.com/ReactTraining/history) whose whole purpose is abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.

So in a nutshell, when you use `BrowserRouter`, you're creating a `history` object which will listen to changes in the URL and make sure your app is made aware of those changes.

### `BrowserRouter` Component Recap
In summary, for React Router to work properly, you need to wrap your whole app in a `BrowserRouter` component. Also, `BrowserRouter` wraps the history library which makes it possible for your app to be made aware of changes in the URL.

## The Link Component

The `Link` component of react it is critialc because is the way that the user navigates through your app. When the user clicks a link it talks to the browser router and tells its to update tu URL.

It's also, accessible if you use the keyboard to navigate an the app it will still work or maybe you want to rigth-click and open a new window that's gonna still work. These components do what users expect a link on the web to do.


The `Link` component is a straightforward way to provide declarative, accessible navigation around your application. By passing a to property to the Link component, you tell your app which path to route to.

```js
<Link to="/about">About</Link>
```

If you're experienced with routing on the web, you'll know that sometimes our links need to be a little more complex than just a string. For example, you can pass along _query parameters_ or _link to specific parts of a page_. What if you wanted to pass _state_ to the new route? To account for these scenarios, instead of passing a string to `Link` s to prop, you can pass it an object like this,

```js
<Link to={{
    pathname: '/courses',
    search: '?sort=name',
    hash: '#the-hash',
    state: { fromDashboard: true }
}}>
    Courses
</Link>
```

You won't need to use this feature all of the time, but it's good to know it exists. You can read more information about Link in the [official docs](https://reacttraining.com/react-router/web/api/Link).

### Link Recap
React Router provides a `Link` component which allows you to add declarative, accessible navigation around your application. You'll use it in place of anchor tags (`a`) as you're typically used to. React Router's `<Link>` component is a great way to make navigation through your app accessible for users. Passing a to prop to your link, for example, helps guide your users to an absolute path (e.g., `/about`):

```js
<Link to="/about">About</Link>
```

Since the `<Link>` component fully renders a proper anchor tag (`<a>`) with the appropriate `href`, you can expect it to behave how a normal link on the web behaves.

## The Router Component
The `Route` component takes a path that will match the URL or not. If the path matches the URL then the route will endure some UI but it won't render anything . If it doesn't match much like the code that we had that was checking our component `state` to decide which screen we wanted to render route we will or that same sort of thing, but, instead of checking the component state it will check the URL. what does that mean?. It means that the back button still going to work.

Here a snippet with the `Router` component code structure:

```js
<Route
    path="/some/path"
    render={ui}
/>
```

### Router Component Recap
The main takeaway from this section is that with a `Route` component if you want to be able to pass props to a specific component that the router is going to render, you'll need to use `Route`’s `render` prop. As you saw, render puts you in charge of rendering the component which in turn allows you to pass any props to the rendered component as you'd like.

In summary, the `Route` component is a critical piece of building an application with React Router because it's the component which is going to decide which components are rendered based on the current URL path.
