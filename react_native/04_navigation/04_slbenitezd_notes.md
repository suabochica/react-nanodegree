Navigation
==========
In this lesson , we are going to learn all about routing. The router that we are going to go with is **react navigation**, built by a team at Facebook and is the official routing solution for React Native.

Routing on Native is a completely different paradigm than routing on the web.

- Routing on the Web: You map a URL to a specific component.
- Routing on Native: The router keeps trakc of a route stack. You can think of it like an array of routes. So you to navigate in the application the router pushes and pops route off the route stack.

Tab Navigator
=============

> Currently, exist to version of React Navigation:
> - [React Navigation v1](https://v1.reactnavigation.org/)
> - [React Navigation v2](https://reactnavigation.org/)
> - [Differencea betwen v1 and v2](https://reactnavigation.org/blog)

## Tab Navigator v1
By using `TabNavigator`, users can navigate through different screens within an application simply by pressing tabs that render different components.

## Tab Navigator v2
`TabNavigator` is deprecated in favor of `createTabNavigator`, which is functionlally identical but clearly communicates that it is a function that retrurns a component. Let's see how we would use Tab Navigator v2.

```js
import { createBottomTabNavigator } from 'react-navigation';

const Tabs = createBottomTabNavigator({
    Hello: {
        screen: Hello
    },
    Goodbye: {
        screen: Goodbye
    },
});

const Hello = () => (
    <View>
        <Text>Hello!</Text>
    </View>
);

const Goodbye = () => (
    <View>
        <Text>Goodbye!</Text>
    </View>
);

export default class App extends React.Component {
    render() {
        return (
            <Tabs />
        );
    }
}
```
Inside the object, each key-and-value pair represents a single tab. The keys represent the name of the tab; this is what users will see and press. Note that a `screen` property is included as well; this is the component that is rendered when the tab is active.

Here comes the interesting part: what `createBottomTabNavigator` returns is actually a component! Since we have stored this in a Tabs variable, we can just render this as we would with any component:

## StatusBar
Recall that so far, our application has been using arbitrary `padding` to account for the status bar at the top of the device's screen. Let's go ahead and change that! React Native actually provides a simple `StatusBar` component to customize how the status bar appears in an application.

Before we take a look at how to implement `StatusBar`, be sure to import it from `react-native`:

```js
import { StatusBar } from 'react-native';
```

## Summary
React Navigator v1 offers a `TabNavigator` (and React Navigator v2 offers us `createBottomTabNavigato`r) API that allows for navigation between different screens via individual tabs. Each tab is dedicated to rendering a specific component.

This section also detailed React Native's `StatusBar` component. StatusBar is relatively straightforward to use and is fully customizable -- we typically just set properties to change it!

In the next section, we'll take a look at React Navigator's Stack Navigator, which allows users to add and remove screens from a stack.

Stack Navigator
=============

When pressing an item in, say, an index view, we expect to go to a new screen with details on that item. React Navigation offers another navigator to do just that! With `Stack Navigator`, new screens are added and removed as a _stack_. This places screens on top of one another in a "last in, first out" manner, similar to Array's `push()` and `pop()` methods.

`StackNavigator`'s usage is largely similar to that of `TabNavigator`. But rather than passing in an object of different tabs, we pass in an object of the different screens that should be available in that stack.

## Stack Navigator v2
StackNavigator has been deprecated in favor of createStackNavigator, which is functionally identical but clearly communicates that it's a function that returns a component.

According to the [documentation](https://reactnavigation.org/blog/), the new StackNavigator is “less pushy”:

> Each time you call push we add a new route to the navigation stack. When you call `navigate`, it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack.

> Let's suppose that we actually want to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about `params`!). To do this, we can change `navigate` to `push`. This allows us to express the intent to add another route regardless of the existing navigation history.

Let's see how we'd use the Stack Navigator from React Navigation v2:

```js
import { createStackNavigator } from 'react-navigation';

const Stack = createStackNavigator({
    Home: {
        screen: Home
    },
    Dashboard: {
        screen: Dashboard
    }
})

const Home = ({ navigation }) => (
    <View>
        <Text>This is the Home view</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Text>Press here for the Dashboard</Text>
        </TouchableOpacity>
    </View>
);

const Dashboard = () => (
    <View>
        <Text>This is the Dashboard</Text>
    </View>
);

export default class App extends React.Component {
    render() {
        return (
            <Stack />
        );
    }
}
```

Note that a `navigation` prop is passed to the stateless functional `Home` component, which allows navigation to another route. Once this is done, we can pass an object into `createStackNavigator` similar to how we did for `createBottomTabNavigator`:

The return value of passing an object into `createStackNavigator` is a component as well, and we can render it as such!

`Stack Navigator` and `Tab Navigator` often go hand-in-hand. Since they each return components, you'll often see one nested within the other. Let's see this in action as we implement this into UdaciFitness!

## Summary
React Navigation's Stack Navigator is another customizable navigation option based on adding and removing new screens to a stack. Its API is similar to that of the Tab Navigator; it takes in an object that defines all screens, then returns a component. Since both the Stack Navigator and the Tab Navigator both return components, a common practice is to nest these navigators within one another.

In the next section, we'll take a look at the Drawer Navigator, in which screens are switched from a drawer that pops out from the side of the screen!