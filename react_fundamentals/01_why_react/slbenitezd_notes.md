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

## What is Declarative Code?
To understand what declarative code means, it's a good idea compare it with imperative code. Both, are two different styles of thinking. A good example to understand the differences between both is set the temperature to 70 degrees inside a car.

- _Imperative way:_ You have a car with two knobs to reach the state. One knob controls the temperature, and the other one controls the airflow. When you get too hot o too cold, you have to do imperative work. It means, you have to manage these knobs the entire drive an then you accumulate over the time the state of 70 degrees, but I never talk about that state.
- _Declarative way:_ In another car, you don't have knobs. Instead, it lets you declare a temperature. Then you tell the car the state I want to be in (in this case 70 degrees), and it handles the imperative work for me.

### Imperative Code
Imperative means:

> expressing a command; commanding

When JavaScript code is written imperatively, we tell JavaScript exactly **what** to do and **how** to do it. Think of it as if we're giving JavaScript commands on exactly what steps it should take. For example, I give you the humble `for` loop:

```javascript
const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
const excitedPeople = []

for (let i = 0; i < people.length; i++) {
    excitedPeople[i] = people[i] + '!'
}
```

Here, We're looping through each item in the `people` array, adding an exclamation mark to their name and storing the new string in the `excitedPeople` array.

This is _imperative_ code, though. We're commanding JavaScript what to do at every single step. We have to give it commands to:

- Set an initial value for the iterator - (`let i = 0`)
- Tell the for loop when it needs to stop - (`i < people.length`)
- Get the person at the current position and add an exclamation mark - (`people[i] + '!'`)
- Store the data in the ith position in the other array - (`excitedPeople[i]`)
- Increment the `i` variable by one - (`i++`)

### Declarative Code
With declarative code, we don't code up all of the steps to get us to the result. Instead, we declare what we want to be done, and JavaScript will take care of doing it. This explanation is a bit abstract, so let's look at an example. Let's take the imperative `for` loop code we were looking at and refactor it to be more declarative.

With the imperative code, we were performing all of the steps to get to the result. What _is_ the result that we want, though? Well, our starting point was just an array of names:

```javascript
const people = ['Amanda', 'Farrin', 'Geoff', 'Karen', 'Richard', 'Tyler']
```

The end goal that we want is an array of the same names but where each name ends with an exclamation mark:

```javascript
['Amanda!', 'Farrin!', 'Geoff!', 'Karen!', 'Richard!', 'Tyler!']
```

To get us from the starting point to the end, we'll just use JavaScript's `.map()` function to declare what we want to be done.

```javascript
const excitedPeople = people.map(name => name + '!')
```

That's it! Notice that with this code we haven't:

- Created an iterator object
- Told the code when it should stop running
- Used the iterator to access a specific item in the `people` array
- Stored each new string in the excitedPeople array

...all of those steps are taken care of by JavaScript's `.map()` Array method.

### React is Declarative
We'll get to writing React code very soon, but let's take another glimpse at it to show how it's declarative.

    <button onClick={activateTeleporter}>Activate Teleporter</button>

It might seem odd, but this is valid React code and should be pretty easy to understand. Notice that there's just an `onClick` attribute on the button...we aren't using `.addEventListener()` to set up event handling with all of the steps involved to set it up. Instead, we're just declaring that we want the `activateTeleporter` function to run when the button is clicked.

### Declarative Code Recap
_Imperative_ code instructs JavaScript on _how_ it should perform each step. With _declarative_ code, we tell JavaScript what we want to be done, and let JavaScript take care of performing the steps.

React is declarative because we write the code that we _want_, and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.

### Further Research
- [Imperative vs Declarative Programming by Tyler](https://tylermcginnis.com/imperative-vs-declarative-programming/)
- [Difference between declarative and imperative in ReactJS from StackOverflow](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)

### Unidirectional Data Flow
Before react, one popular technique for managing state changes in an app over time, was to use data bindings. So, the data change in one place, that changes automatically reflected in other places in the app. Any part of the app that had that data could also change it. But, as the app grows, this technique makes it difficult to determine how a change in one place automatically and implicitly affects the rest of the app.

React uses an explicit method for passing data between components that make it a lot easier to track changes in the state, and how they affect another place of the app. This is called _unidirectional data flow_ because data flows one way, from parent element down to children.

### Data-Binding in Other Frameworks
Front-end frameworks like **Angular** and **Ember** make use of _two-way data bindings_. In two-way data binding the data is kept in sync throughout the app no matter where it is updated. If a model changes the data, then the data updates in the view. Alternatively, if the user changes the data in the view, then the data is updated in the model. Two-way data binding sounds really powerful, but it can make the application harder to reason about and know where the data is actually being updated.

### Further Research
- [Angular's two way data binding](https://angular.io/guide/template-syntax#two-way)
- [Ember's two way data binding](https://guides.emberjs.com/v2.13.0/object-model/bindings/)

### React's Data Flow
Data moves differently with React's unidirectional data flow. In React, the data flows from the parent component to a child component.

The data lives in the parent component and is passed down to the child component. Even though the data lives in the parent component, both the parent and the child components can use the data. However, if the data must be updated, then only the parent component should perform the update. If the child component needs to make a change to the data, then it would send the updated data to the parent component where the change will actually be made. Once the change is made in the parent component, the child component will be passed the data (that has just been updated!).

### Data Flow in React Recap
In React, data flows in only one direction, from parent to child. If data is shared between sibling child components, then the data should be stored in the parent component and passed to both of the child components that need it.

## It's just JavaScript
You will notice that as we get deeper into this course, the API you need to learn for React is pretty small. React doesn't like to recreate functionality that you can already do in JavaScript. So if you feel confortable with JavaScript you will quickly feel confortable with React.

> Bonus: React will make you a much better JavaScript developer.

Over the past couple of years, functional programming has had a large impact on the JavaScript ecosystem and community. Functional programming is an advanced topic in JavaScript and fills hundreds of books. It's too complex to delve into the benefits of functional programming. But React builds on a lot of the techniques of functional programming...techniques that you'll learn as you go through this program. However, there are a couple of important JavaScript functions that are vital to functional programming that we should look at. These are the `.map()` and `.filter()` methods.

### Array's `.map()` Method
If you're not familiar with JavaScript's Array `.map()` method, it gets called on an existing array and returns a new array based on what is returned from the function that's passed as an argument. Let's take a look:

```javascript
const names = ['Edward', 'Alphonse', 'Hohenheim']
const namesLengths = names.map( name => name.length );

console.log(namesLengths) //-> [6, 8, 9]
```

Let's go over what's happening here. The `.map()` method works on arrays, so we have to have an array to start with the `names` array. We call `.map()` on the `names` array and pass it an arrow function as an argument. The arrow function that's passed to `.map()` gets called _for each item_ in the `names` array! The arrow function receives the first name in the array, stores it in the `name` variable and returns its length. Then it does that again for the remaining two names.

So `nameLengths` will be a _new_ array `[6, 8, 9]`. This is important to understand; **the `.map()` method returns a new array, it does not modify the original array.**

### Array's `.filter()` Method
JavaScript's Array `.filter()` method is similar to the `.map()` method:

- It is called on an array
- It takes a function as an argument
- It returns a new array

The difference is that the function passed to `.filter()` is used as a test, and only items in the array that pass the test are included in the new array. Let's take a look at an example:

```javascript
const names = ['Edward', 'Alphonse', 'Hohenheim']
const longNames = names.filter( name => name.length > 7 );

console.log(longNames) //-> ['Alphonse', 'Hohenheim']
```

Just as before, we have the starting `names` array; We call `.filter()` on the `names` array and pass it a function as an argument; Again, just like with `.map()` the arrow function that's passed to `.filter()` gets called _for each item_ in the names array. The first item (i.e. 'Edward') is stored in the `name` variable. Then the test is performed - this is what's doing the actual filtering. It checks the length of the name. If it's 7 or less, then it's skipped (and not included in the new array!). But if the length of the name is greater than 7, then `name.length > 7` returns true and the name is included in the new array!. Lastly, just like with `.map()` the `.filter()` method returns a _new_ array instead of modifying the original array.

So `longNames` will be the new array `['Alphonse', 'Hohenheim']`. Notice that it only has two names in it now, because 'Edward' is 6 characters and was filtered out.

### Combining `.map()` And `.filter` Together.
What makes `.map()` and `.filter()` so powerful is that they can be combined. Because both methods return arrays, we can chain the method calls together so that the returned data from one can be a new array for the next.

```javascript
const names = ['Edward', 'Alphonse', 'Hohenheim']
const longNamesLengths = names.map( name => name.length > 7 ).map( name => name.lenght );

console.log(longNamesLengths) //-> ['8', '9']
```

> On a side note, you'll want to run things in this order (`.filter()` first and then `.map()`). Because `.map()` runs the function once for each item in the array, it will be faster if the array were already filtered.

### React is Just JavaScript Recap
React builds on what you already know - JavaScript! You don't have to learn a special template library or a new way of doing things.

Two of the main methods that you'll be using quite a lot are:

- `.map()`
- `.filter()`

It's important that you're comfortable using these methods, so take some time to practice using them. Why not look through some of your existing code and try converting your `for` loops to `.map()` calls or see if you can remove any `if` statements by using `.filter()`.