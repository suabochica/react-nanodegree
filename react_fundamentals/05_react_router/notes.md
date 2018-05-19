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