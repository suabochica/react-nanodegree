React vs React Native
=====================

In this lesson we will look at how the web, iOS and Android all differ from one another from both a user interface perspective and a user experience perspective. We will look at the components thar React Native comes with and last we will add Redux into a React Native application.

Web vs. Native
==============

From a technological standpoint, React Native does a great job of letting you take your experiences on the web to build native applications. What is critical to understand is that experiences you are developping for on mobile are **fundamentally** different than on the web. Not only are native apps different than web apps, but iOS apps are different than Android apps. If you took an Android Style app and put it on iOS, it would just feel weird. Perhaps the most apparent are the distinct design philosophies on each platform:

- Android apps use Google's _Material Design_
- iOS apps use Apple's _Human Interface Design_

When designing mobile applications, it is important to your users that an iOS app _feels_ like and iOS app, and an Android app _feels_ like and Android app.

## Key Differences Between Web Apps and Native Apps

- **Animations**: Native apps often leverage animations to help create a great user experience. Aninmation such as button effects, screen transitions, and other visual feedback may the subtle, but they support continuity and guidance in the apps you build. They all function to dynamically _tell a story_ about how your application works. Without animations, an application can fell like just a collection of static screens. We will go in-depth with animations later.
- **Navigation**: Recaññ tjat React Router's `Route` component allow us to map a URL to a specific UI component. In React Native, routers function as a _stack_; that is, individual screens are _pushed_ and _popped_ as needed.

## Summary
When developing your React Native projects, keep in mind that you're designing for a different experience than that of web applications. Mobile applications look and feel different due to fundamental differences, such as subtle animations that build a sense of continuity for your users. Differences exist between Android and iOS as well, especially in their design philosophies and navigation. We'll look at some fundamental components that make up React Natives apps in the next section!

Common React Native Components
==============================
When writing HTML, we are using `<div>` and `<span>` tags to defince section or to contain other elements on the page. In React Native, a similar priciple applies, but this times we are usign React Native's `<View>`component to build the application UI. Just like HTML's `<div>`, `<View>` components can accommodate several props (e.g., `styles`), and can even bes nested inside other `<View>`components.

`<Text>` works just how you would expect, as well. Its main objective is to render text in the application. Just like `<View>`, aryling and nesting capabilities apply to `<Text>`components, as well.

## Icons
Right out of the box, **Creaate React Native App** offers support for thousands of vector icons to use in your applications. Feel free to bookmark and check out Expo's [vecto icon directory](https://expo.github.io/vector-icons) for a complete list. Whichever icon set you chose, just be sure that it fits the overall look and fell of your application (e.g., usign platform-specific icons)

Then, for our Udacifitness app we will add a functión `getMetricMetaInfo()` in the `utils/helpers.js` file that will return an object with all the activity information. This object looks like:

```js
const info = {
    run: {
        displayName: 'Run',
        max: 50,
        unit: 'meters',
        step: 1,
        type: 'stepers',
        getIcon() {
            return (
                <View>
                    <MaterialIcons
                        name="direcctions-run"
                        color={black}
                        size={35}
                    />
                </View>
            )
        }
        ...
    }
}
```

The `getMetricMetaInfo()` function will consume by the `<AddEntry />` component.

## Touchables
Users mainly interact with web apps with _clicks_. In the world of mobile apps, however, several different touch gestures are used to navigate through the app: tapping a button swiping to scroll through a list, and so on.

React Native offers a number of components to handle "tapping gestures," or what is called Touchables:

- `Button`
- `TouchableHighlight`
- `TouchableOpacity`
- `TouchableNativeFeedback`
- `TouchableWithoutFeedback`

Both, Buttons and Touchables have access to an `onPress` prop. Also the Touchable can be neste within Views, and Views can be neste within Touchables.

## Lists
React Native comes with a few ways to render lists. You'll probably run into `ScrollView` and `FlatList` components most commonly, so let's take a look at both of these in detail.

- `ScrollView` role: renders all child components at once
- `FlatList` role: render only items visible on screen
- `SectionList` role: render on-screen items, but with headers.

## Forms
Forms in React Native are just like the forms in React that you already know: the state of input form elements is controlled by the React component that renders that form. That is, form values are held in local component state, making state the "source of truth" for that form.

React Native provides a few basic components to use in your application's forms. We'll take a look at each of these more closely in the following video:

- `TextInput`
- `KeyboardAvoidingView`: Important to show the keyboard "pop up" without hiding text inputs.
- `Slider`
- `Switch`

## Other Components
We've just seen some of the most important components built into React Native. These components will get you started with the essential functionalities in the apps that you build -- but the list of available components goes on! Feel free to review the React Native documentation for a [complete list](https://facebook.github.io/react-native/docs/components-and-apis.html#components-and-apis).

Note that certain components are also platform-specific! Though you want to build cross-platform components with composition, reusing as much code as possible, it may make sense for certain elements to be different depending on your audience (i.e., iOS vs. Android).

## Summary
React Native provides a variety of built-in components for developing mobile applications. While some support basic functionality in an application (e.g., text, images, lists), others offer more specialized functionality (e.g., pulling to refresh, displaying a loading indicator).

AsyncStorage
============

## LocalStorage
In order to persist data in a web application, we'd normally store the data in some sort of database. This prevents app data grom being lost between page refreshes. Using `localStorage`, we can achieve a similar effect for the user by storing this data _directly in their browser_. Best of all is that the data stored in `localStorage` has no expiration date. This means that even if a session ends (e.g. the browser tab is closed), data will not be lost!

### Saving to `localStorage` Example
Let's say we are building a simple React and Redux application that lets users create and manage a list of tasks. Basuc functionality allow users to add items to their task liks, remove items, and mark items as completed.

Assumming much of this data is kepts in the application's store, how would we go about persisting data? One way would be to save to `localStorage` each time that state is updated. That is, the store's state will be saved with each _dispatch_:

```js
// store.js

import { createStore } from 'redux';
import Reducer from '../reducers/reducer';

const configureStore = () => {
const store = createStore(Reducer);

store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
});

return store;
};

export default configureStore;
```

After the store is created, we call `store.subscribe()` and pass in a callback function. The callback effectively saves a JSON string of the store's state into `localStorage`. As a result, by subscribing to the store right after it is created, we can save data related to all of the user's tasks right into their browser!

## AsyncStorage
React Native's version of `localStorage` is called `AsyncStorage`. It is similar to `localStorage` except it is asynchronous. A nice feature of `AsyncStorage` is it is JavaScript abstraction over the iOS and the Android equivalents. So when using it, you don't need to worry about the different environments. In `AsyncStorage` the three main methods exist as well:

- Set item
- Remove item
- Clear all

> AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.

## Summary
React Native's version of `localStorage` is `AsyncStorage`. Conveniently, since [`AsyncStorage`](https://facebook.github.io/react-native/docs/asyncstorage.html) is just an abstraction over iOS and Android equivalents, there's no need to consider the different environments.

We took a close look at these 3 methods available on `AsyncStorage`:

- setItem
- mergeItem
- getItem

Redux and React Native
======================
Recall that Redux is a _predictable state container_ for JavaScript applications. It is agnostic to any particular view library or framework, so not only can we use it with React, but we can integrate it into React Native applications, as well!

With its lean size and minimal dependencies, Redux is a great tool for React Native projects. And best of all: since React Native is still fundamentally _just JavaScript_, Redux can be added into projects the same way that we're used to.

## Summary
Remember that React Native is fundamentally still _just JavaScript_. As such, adding Redux to help manage application state will involve the very same principles and processes as adding Redux to a web application.