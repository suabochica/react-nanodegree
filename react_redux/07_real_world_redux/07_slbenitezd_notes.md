Real World Redux
================

Up until this pont we have covered all the features of redux by building out a simple todo/goals app. This project was great for learning purposes but it's somewhat rudimentary and isn't represent the complexities of a real-world porject. So let's use:

- React
- Redux
- React Redux bindings
- Redux middleware

To build a complex real world application. The goal is build a [redux-twitter](https://tylermcginnis.com/projects/redux-twitter/) with this particular features:

- Write a new tweet
- Reply a tweet
- Give like to a tweet
- Persist all the tweets interactions

All the development will be in the `/reactnd_chirper_app_master` folder.

Project Walkthrough
-------------------

To help you solidify your understanding of React and Redux, we will do a project walkthrough. The project we'll be building is called “Chirper”. Building this simple Twitter clone will help you practice improving the predictability of an application's state; establishing strict rules for getting, listening, and updating the store; and identifying what state should live inside of Redux and what state should live inside of React components.

As with most things, there is more than one correct way to achieve a successful result. We will be discussing one approach to building a React/Redux project. We encourage you to come up with an approach that works for you. Regardless of the approach you choose, make sure always to plan out your project's architecture _before_ starting to code.

### The Importance of Planning Your Project

Many developers make the mistake of starting to code before they've put any thought into figuring out precisely what their app's architecture should be. This approach results in spending an incredible amount of time debugging, restructuring the code, and sometimes even starting over, completely!

Trust us, planning out your project before starting to code will save you a lot of time later on.

In our Chirper project walkthrough, we'll go over the planning stages as well as the coding stages of the project.

### Planning YOur React/Redux App's Architecture

In the Planning Stage, we will go over 4 steps that will help you come up with your app's architecture, which is often the trickiest part.

1. Identify what each view should look like
2. Break each view into a hierarchy of components
3. Determine what events happen in the app
4. Determine what data lives in the store

### Coding in Stages
We'll be building the project along together, breaking down each phase of the project's development. The first thing we we'll do is take a look at the different views the final project should have.

Let's dive in!


Step 1: Indetify Each View
--------------------------

We need to determine the look and functionality of each view in your app. One of the best approaches is to draw each view of the app on paper so that yout will have a good idea of what information and data you are plannig to have on each page.

> Instead of paper and pencil you can use [software for creating mockups](https://codingsans.com/blog/mockup-tools)

### View for the Dashboard Page
#### Dashboard View Requirements
- Is located at home route (`/`)
- Shows tweets sorted from most recently added at the top, to oldest at the bottom
- Each tweet will show:
    - The author
    - The timestamp
    - Who the author is replying to
    - The text of the tweet
    - A reply button –with the number of replies–
    - A like button –with the number of likes–

### View for the Tweet Page
#### Tweet Page View Requirement
- Is located ad `/tweet/:id`
- Shows an individual tweet
    - The author
    - The timestamp
    - A reply button –with the number of replies–
    - A like button –with the number of likes–
- Has a reply form
- Shows all replies

### View for the Creating a New Tweet
#### Tweet Page View Requirement
- Is located at `/new`
- Has a textbox for adding a new tweet

### View Recap
So these are the 3 view in our app:
- Dashboard
- Tweet
- New Tweet

We now have a clear idea of what we're trying to build and can be confident that our views meet all of the provided requirements

Step 2: Break Each View Into Hierarchy of Components
----------------------------------------------------
Let's do two things:

- Draw boxes around every component
- Arrange our components into a hierarchy

> To determine if something should be a component you should follow the **Single Responsibility Principle**

### Components for the Dashboard View
- **App** - The overall container for the project
- **Navigation** - Displays the navigation
- **Tweets List** - Responsible for the entire list of tweets
- **Tweet** - In charge of display the content for a single tweet

### Components for the Tweet View
- **App** - The overall container for the project
- **Navigation** - Displays the navigation
- **Tweets Container** - Displays a list of tweets
- **Tweet** - Displays the content for a single tweet
- **New Tweet** - Displays the form to create a new tweet (reply)

### Components for the New Tweet View
- **App** - The overall container for the project
- **Navigation** - Displays the navigation
- **New Tweet** - Displays the form to create a new tweet (reply)

### All Components
So from the way I broke things down, the application will have the following compoenents:

- App
- Navigation
- Tweet List
- Tweet Container
- Tweet
- New Tweet

This component hierarchy tell us which components will be used inside of the other components. It gives us the skeleton of our app. All of these are presentational components. Rigth now, we don't care which components will be upgraded to containers. As we start building out the store, we will create additional components that will be container components to get data from the store and pass it to the presentational components that need the data.

Thus far, we haven't done anything that is special to Redux; all of the steps above are applicable and useful for React applications that not use Redux.

Remember that Redux doesn't care about _how_ our app looks or what components it uses. Instead, it gives a way to manage the _state_ of the application in a predictable way. When we talk about _state_, we are really talking about _data_ –not just any kind of data inside the app, but data that can change base on the events in the app–

Step 3: Determine the Events in the App
---------------------------------------

We need to take a look to _what_ is happening in each component. Let's determine what actions the app or the user is perfoming **on the data**. It is the data being set, modified or deleted?. Then we will need an action to keep track of that event!

Let's _bold_ the action and **underline** the data.


### Tweets List Component
For the Tweets List component, the only information that we see is that we'll have to get a list of all of the tweets. So for this component, we just need to:

- _Get_ the **tweets**

So the action type for event this will probably `GET_LIST_OF_TWEETS`

### Tweet Component

- We _get_ a particular tweet from a list of **tweets**
- We _get_ the **authedUser (user that is currently logged in)** so the user can _toggle_ the likes on each **tweets*
- We _get_ the **authedUser** so the user can _reply_ to a **tweet**

### Tweet Container Component

- We _get_ a specific tweet from a list of **tweets**
- We _get_ the replies to a specific tweet from a list of **tweets**

### New Tweet Component

- We _get_ the **authedUser**, so the user can _create_ a new **tweet**
- We _set_ the **text of the new tweet**

Step 4: Data and the Store
--------------------------

Remember that the main problems that Redux (and react-redux bindings!) was meant to solve were:

- Propagation of props through the entire component tree
- Ensuring consistency and predictability of the state across the app

According to Dan Abramov, the creator of Redux, we should follow the following principle for determining whether to store a piece of data in the store or in React component:

> Use Redux for the state that matters globally or is mutated in complex ways... The rule of thumb is: _do whatever is less awkward_

For each piece of data from Step 3, let's see whether it's used by multiple components or mutated in a complex way.

### _Text of the new tweet used by:_ New Tweet Component

This piece of data is not used by multiple components and is not mutated in a complex way. That means that it is a great candidate for components state instead of app state that resides in the store.

### _Tweets used by:_ Dashboard Component, Tweet Page Component and Tweet Component

In the Tweet Page Component, we need to show the reply tweets. Let's take a look at the starter code in `_Data.js`:

```js
let tweets = {
    tweetId: {
        id: tweetId,
        text: tweetText,
        author: userId,
        timestamp: timestamp,
        likes: [userId1, userId2],
        replies: [tweetId1, tweetId2],
        replyingTo: tweetId_OR_null
    }
};

```

To get reply tweets, we can get the tweet with a specific id from the list of all of the tweets and access its `replies` properties.

In the **Dashboard Component** we need to access the current list of tweets. If the Dashboard component knows the ID of the tweet that needs to be displayed, it can just pass an ID to the Tweet Component, which will render the tweet.

In the **Tweet Component**, we need to pick out a tweet with a specific ID from the current list of tweets.

That means that we can store the tweets in the store and make the Dashboard Component, Tweet Page Component, Tweet Component into containers –components that have access to the store via the `connect()` function–

As soon as the data changes (e.g. someone likes the tweet), all the components that use the data will update.

Keep in mind that each tweet contains the author's name and the author's avatar. One way we can model the state is:

```js
tweets: {
    tweetId: {tweetId, authorId, authorName, authorAvatar, timestamp, text, likes, replies, replyingTo},
    tweetId: {tweetId, authorId, authorName, authorAvatar, timestamp, text, likes, replies, replyingTo}
}
```

Modeling the state this way is not wrong, but is inconvenient if we want to extend the functionality of the app in the future to be able to find tweets made by a particular author. Moreover, this way of storing the data mixes the two types of objects:

- tweets data
- user data

This goes against the recommendation to normalize the states. According to the Redux documentations, here are the principles of state normalizations:

- Each type of data gets its own "table" in the state,
- Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
- Any references to individual items should be done by storing the item's ID.
- Arrays of ISs should be used to indicate order.

Then, normalized state of the app would look like this:

```js
{
    tweets: {
        tweetId: { tweetId, authorId, timestamp, text, likes, replies, replyingTo},
        tweetId: { tweetId, authorId, timestamp, text, likes, replies, replyingTo}
    },
    users: {
        userId: {userId, userName, avatar, tweetsArray},
        userId: {userId, userName, avatar, tweetsArray}
    }
}
```

### _authedUser used by:_ Tweet Component and New Tweet Component

Each Tweet Component needs to show whether the logged in user has liked a tweet. To do that, we need to know who the logged in user is. Looking at the Component Hierarchy from Step 2, we know that the Tweet Component gets used by multiple components. Therefore, we need to upgrade this component to a container so it could access the `authedUser` piece of data from the store to see whether to show a red heart.

We also know that for every new tweet, we will have to record who the tweet's author is. The React way of storing state is to put the state in the most parent component and the pass it down to all the children that need it. In this app, that would mean storing in the App Component.

One way to do that is to store the `authedUser` in the App Component and the pass it down to the components that need access to it. While this works, it is inconvenient. It would be simpler to store the `authedUser` in the store and the provide the Tweet Component access to the store. The New Tweet Component could then just dispatch an action with the text of the new tweet and the id of the tweet we are replying to as parameters in order to save the new tweet.

Saving a tweet is an asynchronous operation we could use redux thunks to do that. Thunks give us access to the store so we could have the following action creator:

```js
function handleAddTweet(text, replyingTo) {
    return (dispatch, getState) => {
        const { authedUser } = getState();

        return saveTweetToDatabase({
            text,
            author: authedUser,
            replyingTo
        }).then(tweet => dispatch(addTweet(tweet)));
    };
}
```

Generally, accessing the store from an action creator is considered an anti-pattern. Dan Abramov says that the few use cases where it is acceptable to do that are:

> To check data before you make a request or to check whether you are authenticated (i.e. doing a conditional dispatch)

Another reason we would want to keep the `authedUser` piece of data in the store is that if we extend our application to include the ability to sign in and sign out, this functionality would be easy to manage with Redux.

The New Tweet Component doesn't need to access the `authedUser` piece of state, but it _does_ need to be able to dispatch an action to let the reducer know that a new tweet has been made. To have access to the `dispatch()` method. a component must be connected to the store. In other words, it must be a container. So, we know that the Tweet Component and the New Tweet Component will be upgraded to containers. Finally, we get:

| **The Store** |
|:-------------:|
|     Tweets    |
|     Users     |
|   authedUser  |

Our store is done! While we making our store, we also determined which components will be upgraded to containers, so our skeleton app is now even more complete. Time to start coding.