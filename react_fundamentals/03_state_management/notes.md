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

## Exercise Explanation
There are two ways to approach this app. The first is a bottom-up approach and
the second is a top-down approach.

## Bottom-Up Approach

The bottom-up approach involves two steps:
1. Putting all of our code into the `App./js` file and.
2. Once the app renders what you want it to render, you break that code up into different components. This is a possible approach to the first step of the bottom-up strategy:

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.usersByMovie = {};

    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;

      if (this.usersByMovie[movieID]) {
        this.usersByMovie[movieID].push(profile.userID);
      } else {
        this.usersByMovie[movieID] = [profile.userID];
      }
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h1>How Popular is Your Favorite Movie?</h1>
        <ul>
          {Object.keys(movies).map(key => {
            const userIDs = this.usersByMovie[movies[key].id];

            return (
              <li key={movies[key].id}>
                <h2>{movies[key].name}</h2>
                <h3>Liked By:</h3>

                {!userIDs ? (
                  <h4>None of the current users liked this movie</h4>
                ) : (
                  ""
                )}

                <ul>
                  {userIDs &&
                    userIDs.map(userId => {
                      return (
                        <li key={userId}>
                          <p>{users[userId].name}</p>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
```

The reason we would need to do step 2 (break down that code into components) instead of just keeping it as it is above is that this code above is hard to read, harder to maintain, and impossible to reuse.

To identify the components, we would want to break up the code into sections. For example, here's a section of the code that corresponds to a particular movie:

```js
<li key={movies[key].id}>
  <h2>{movies[key].name}</h2>
  <h3>Liked By:</h3>

  {!userIDs ? <h4>None of the current users liked this movie</h4> : ""}

  <ul>
    {userIDs &&
      userIDs.map(userId => {
        return (
          <li key={userId}>
            <p>{users[userId].name}</p>
          </li>
        );
      })}
  </ul>
</li>
```

See how the `li` element represents a movie? We can replace that entire `li` chunk with:

```js
<MovieCard
  key={id}
  users={users}
  usersWhoLikedMovie={usersByMovie[id]}
  movieInfo={movies[id]}
/>
```

Now, we can use the `MovieCard` class to render our dashboard:

```js
<ul>
  {Object.keys(movies).map(id => (
    <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
  ))}
</ul>
```

The entire chunk above can go inside our Dashboard Component.

The list of users who liked a particular movie can either reside inside of the MovieCard Component or be its own Component. In this application, it's a matter of preference because we won't be reusing the UserList Component elsewhere and the code inside of the MovieCard Component doesn't look bloated. However, if we were also required to show a list of all users in our app, we would want to reuse the UserList Component to do that.

## Top-Down Approach

Now, the top-down approach to making this app involves identifying each component first and then starting to code. We recommend practicing this approach because it will help you later in the course, when you learn about state and your apps become more complex.

An intuitive way of breaking an app into components is to draw what you want your resulting app to look like and then to physically draw boxes around each piece of our application - take a look at this article to see an example of that: https://brotzky.co/blog/react-thinking-in-components.

### How to Know What should be a Component:

Components are reusable chunks that can be nested inside of each other, like Russian nesting dolls. Each component needs to follow the Single Responsibility Principle - that is, do only 1 thing.

Oftentimes, the number of components an app should have is subjective, but it is always the case that they should follow the Single Responsibility Principle, be reusable, and manageable in size.

