# Why React?

Before start with the React syntax, take a step back and talk about what makes React special:

- Its compositional model
- Its declarative nature
- The way data flows through a Component
- React is really just Javascript

## What is Composition?

Composition is:

> to combine simple functions to build more complicated ones

Lets check the next code:

```javascript
function getProfileLink (username) {
    return 'https://github.com/' + username
}

function getProfilePic (username) {
    return 'https://github.com/' + username + '.png?size=200'
}

function getProfileData (username) {
    return {
        pic: getProfilePic(username),
        link: getProfileLink(username)
    }
}
```
In summary, we use `getProfileLink` and `getProfileProfile` to compose `getProfileData`. Now we could have written `getProfileData` without composition by providing the data directly:

```javascript
function getProfileData (username) {
    return {
        pic: 'https://github.com/' + username,
        link: 'https://github.com/' + username + '.png?size=200'
    }
}
```
There's nothing technically wrong with this at all; this is entirely accurate JavaScript code. But this isn't composition. There are also a couple of potential issues with this version that isn't using composition. If the user's link to GitHub is needed somewhere else, then duplicate code would be needed. A good function should follow the "DOT" rule:

> Do One Thing

The last function is doing a couple of different (however minor) things; it's creating two different URLs, storing them as properties on an object, and then returning that object. In the composed version, each function just does one thing:

- `getProfileLink` – just builds up a string of the user's GitHub profile link
- `getProfilePic` – just builds up a string the user's GitHub profile picture
- `getProfileData` – returns a new object

### React and Composition

React makes use of the power of composition, heavily! React builds up pieces of a UI using components. Let's take a look at some pseudo code for an example. Here are three different components:

```
<Page />
<Article />
<Sidebar />
```

Now let's take these simple components, combine them together, and create a more complex component (aka, composition in action!):

```
<Page>
    <Article />
    <Sidebar />
</Page>
```

Now the `Page` component has the `Article` and `Sidebar` components inside. This is just like the earlier example where `getProfileData` had `getProfileLink` and `getProfilePic` inside it.

We'll dig into components soon, but just know that composition plays a huge part in building React components.

### Composition Recap

Composition occurs when _simple_ functions are _combined_ together to create _more complex_ functions. Think of each function as a single building block that _does one thing_ (DOT). When you combine these simple functions together to form a more complex function, this is composition.

### Further Research
- [Compose me That: Function Composition in JavaScript](https://www.linkedin.com/pulse/compose-me-function-composition-javascript-kevin-greene/)
- [Functional JavaScript: Function Composition For Every Day Use](https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10)