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