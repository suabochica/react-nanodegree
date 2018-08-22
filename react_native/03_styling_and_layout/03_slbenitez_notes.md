Styling & Layout
================
It's time to introduce how to handle presentation in React-Native.

CSS in JS
=========
Before we jump into how CSS in JavaScript works, let's check out an example of some "normal" HTML and CSS:

```html
<!-- index.css -->
.avatar {
    border-radius: 5px;
    margin: 10px;
    width: 48px;
    height: 48px;
}

<!-- // index.html -->
<div>
    <img class='avatar' src='https://tylermcginnis.com/tylermcginnis_glasses-300.png' />
</div>
```

Nothing too surprising! But since we're not using HTML or CSS files to build mobile apps -- how would this look in React Native?

First, it important to know that all of the core components in React Native can accept a prop named `style`. One way we can leverage this prop is to provide styling to components with inline JavaScript objects:

```js
function Avatar ({ src }) {
    return (
        <View>
            <Image
                style={{borderRadius: 5, margin: 10, width: 48, height: 48}}
                source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
        />
        </View>
    );
}
```

In the example above, the `<Image>` component receives two props: `style` and `source`. The value of `style` is just a plain old JavaScript object with `borderRadius`, `margin`, `width`, and `height` properties. Keep in mind that unlike CSS on the web, properties are written in _camelCase_ (i.e., borderRadius in CSS in JS, but border-radius on the web).

This works, but things can get muddy quickly. Imagine if the inline object contained a dozen properties, or if we wanted the same style to apply to more than just one component! One way to keep your code DRY and reusable is to store the object in a variable:

```js
const styles = {
    image: {
        borderRadius: 5,
        margin: 10,
        width: 48,
        height: 48,
    }
}

function Avatar ({ src }) {
    return (
        <View>
            <Image
                style=(styles.image)
                source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
        />
        </View>
    );
}
```

It's a great way to clean things up a bit, but React Native goes a step further with its `StyleSheet` API. Check out the following example:

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TextExample extends React.Component {
    render() {

    return (
        <View>
            <Text style={styles.greenLarge}>This is large green text!</Text>
            <Text style={styles.red}>This is smaller red text!</Text>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    greenLarge: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 40
    },
        red: {
        color: 'red',
        padding: 30
    },
});
```

Here, an object containing styles is passed into `StyleSheet`'s `create` method. It looks similar to styling with a JavaScript object variable! However, using `StyleSheet` gives us a few benefits in terms of code quality and performance. We’ll take a closer look later in this Lesson as well, but this is how the React Native docs describe it:

### Code quality
- By moving styles away from the render function, you're making the code easier to understand.
- Naming the styles is a good way to add meaning to the low-level components in the render function.

### Performance
- Making a stylesheet from a style object makes it possible to refer to it by ID instead of creating a new style object every time.
- It also allows to send the style only once through the bridge. All subsequent uses are going to refer to an id (not implemented yet).

Another benefit is that `StyleSheet` validates the content within the style object as well. This means that should there be any errors in any properties or values in your style objects, the console will throw an error during compilation instead of at runtime. If you wanted to implement more than one style to a component, the style prop can accept styles as an array.

## Summary
CSS in JS is a distinct approach to styling. The main idea is that styling is handled by JavaScript objects rather than traditional CSS. Styles can be written inline or accessed via object variables, but React Native offers a `StyleSheet` API that provides a performant and compositional way to style components.

Flexbox Guide
=============

Whenever I learn a new technology, I like to answer the question, “Why does this specific technology exist?” With flexbox, the answer to this question may just be that creating an all-purpose layout with CSS can be quite cumbersome. The whole goal of flexbox is to create a more efficient way to "lay out, align, and distribute space among items in a container, even when their size is unknown and/or dynamic". In a nutshell, _flexbox is all about creating dynamic layouts._

The main idea of flexbox is that you give the parent element the ability to control the layout of all of their (immediate!) child elements rather than having each child element control its own layout. When you do this, the parent becomes a **flex container** while the child elements become **flex items**. An example of this is instead of having to float to the left all children of an element and add margin to each one, instead, you can just have the parent element specify to have all of its children be laid out in a row with even space between them. So, layout responsibilities move from the children to the parent. This allows for more fine tuned control over the layout of your app.

## Summary
React Native leverages a version of **flexbox** to build component layout. This is primarily due to flexbox's ability to provide consistent layouts across different screen sizes.

Flexbox containers comprise of two axes: a **main axis**, as well as a **cross axis**. Some of the more critical properties to consider when building layouts with flexbox include `flex-direction`, `justify-content`, and `align-items`. React Native's implementation of flexbox _is_ a bit different, however.

Layout in React Native
======================

## React Native's Flexbox Implementation
React Native implements flexbox for build layouts, but there are some key differences to keep in mind as you develop your applications. First, all containers in React Native are _flex containers_ by default. Recall that in traditional CSS flexbox, you would normally define a flex container like so:

```css
/*example.css*/

.container {
    display: flex;
}
```

However, this is completely unnecessary in React Native! By default, everything is `display: flex;`. You can just use the defaults as they are, without adding different properties or writing extra code.

Another important distinction is how React Native handles `flex-direction`, a property that establishes the main axis (i.e., defining the direction in which flex items are placed). In web applications, items default to `row`. But since we're working on mobile devices, React Native sets the default to `column`, which lays out items vertically.

One more major difference you'll encounter is how the `flex` property is used. On the web, flex specifies how a flex item grows or shrinks to manage the space around it (along the main axis). In React Native, `flex` is generally used with flex items that are on the same level, but hold different flex values. For example:

```js
import React from 'react';
import { View } from 'react-native';

const FlexDemo = props => (
    <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'green'}} />
        <View style={{flex: 3, backgroundColor: 'blue'}} />
    </View>
);

export default FlexDemo;
```

Here, `FlexDemo` is a stateless functional component which renders `<View>` components with different `flex` values. Its outermost container is set to `flex: 1`, which will expand the full available width along the main axis (i.e., the entire screen in this example). Its children `<View>` components will fill the space accordingly, rendering a `blue` background color that takes up three times as much space as `red` takes, and `green` that takes up exactly twice as much space as `red` takes.

## Other Differences
In addition to the above, here is a list of defaults in other common CSS properties that React Native applies to components:

```css
box-sizing: border-box;
position: relative;
align-items: stretch;
flex-shrink: 0;
align-content: flex-start;
border: 0 solid black;
margin: 0;
padding: 0;
min-width: 0;
```
## Platform API
Recall that React's approach to app development is "learn once, write anywhere." The goal is to use the same principles, technologies, and in the case of React Native -- the same code -- to develop applications. However, there may be cases that make sense to use _distinct_ code for each mobile platform. For example, what if we wanted unique styling between iOS and Android visual components?

## Dimensions API
React Native also comes with [Dimensions](https://facebook.github.io/react-native/docs/dimensions.html), which allows you to select window's width and height in the user's device! To use it just check the next snippet;

```js
import  { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
```

Feel free to use these measurement to, for example, plan how your `<View>`s will look.


## Summary
React Native uses **flexbox** to manage layout in mobile applications. However, there are some minor distinctions between the official flexbox specification (i.e., _CSS on the web_) and React Native's own implementation. Most of these distinctions are just differences in default settings.

Since differences also exist in how Android and iOS applications should look and feel, React Native also offers a `Platform` API, which we can leverage to style each platform independently.