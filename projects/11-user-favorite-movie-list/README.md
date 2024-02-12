🎥 Movies Favorites List
========================

A simple practice to test data manipulation in react.

🧰 Tech stack
------------

- npm v9.6.7
- React v16.3.2 + JavaScript

🚀 Run the project
------------------

The zip file not have the `node_modules` folder. So, to run the project please execute:

1. `pnpm i`
2. `pnpm run start`.

You should get the next view when navigate `localhost:3000` in your browser:

![Mental Math Game](assets/00-movies-favs-list.png)

✅ Task: Organize your data
----------------------------

Use React and the `profiles`, `users`, and `movies` data in `App.js` to display a list of users alongside their favorite movies.

🕰️ Example: Organize your data
------------------------------

The `users` object has the user "Jane Cruz":

```js
const users = {
    1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
}
.
.
.
};
```

And the `profiles` array has a combination of which users like which movies:

```js
const profiles = [
{
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
},
.
.
.
];
```

From this information, one of the list items might look like this:

> Jane Cruz's favorite movie is Planet Earth 1.

✅ Task: Display your data
---------------------------

Let's do something a little bit more complicated. Instead of displaying a list of users and their movies, this time you need to display a list of movies.

For each movie in the list, there are two options:

1. If the movie has been favorite, then display a list of all of the users who said that this movie was their favorite.
2. If the movie has *not* been favorite, display some text stating that no one favorited the movie.

As you go about tackling this project, try to make the app *modular* by breaking it into reusable React components.

🕰️ Example: Display your data
-----------------------------

```html
<h2>Forrest Gump</h2>
<p>Liked By:</p>
<ul>
    <li>Nicholas Lain</li>
</ul>

<h2>Get Out</h2>
<p>Liked By:</p>
<ul>
    <li>John Doe</li>
    <li>Autumn Green</li>
</ul>

<h2>Autumn Green</h2>
<p>None of the current users liked this movie</p>
```
