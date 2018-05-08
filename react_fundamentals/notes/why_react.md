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

- *Imperative way:* You have a car with two knobs to reach the state. One knob controls the temperature, and the other one controls the airflow. When you get too hot o too cold, you have to do imperative work. It means, you have to manage these knobs the entire drive an then you accumulate over the time the state of 70 degrees, but I never talk about that state.
- *Declarative way:* In another car, you don't have knobs. Instead, it lets you declare a temperature. Then you tell the car the state I want to be in (in this case 70 degrees), and it handles the imperative work for me.

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

This is *imperative* code, though. We're commanding JavaScript what to do at every single step. We have to give it commands to:

- Set an initial value for the iterator - (`let i = 0`)
- Tell the for loop when it needs to stop - (`i < people.length`)
- Get the person at the current position and add an exclamation mark - (`people[i] + '!'`)
- Store the data in the ith position in the other array - (`excitedPeople[i]`)
- Increment the `i` variable by one - (`i++`)

### Declarative Code

With declarative code, we don't code up all of the steps to get us to the result. Instead, we declare what we want to be done, and JavaScript will take care of doing it. This explanation is a bit abstract, so let's look at an example. Let's take the imperative `for` loop code we were looking at and refactor it to be more declarative.

With the imperative code, we were performing all of the steps to get to the result. What *is* the result that we want, though? Well, our starting point was just an array of names:

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

*Imperative* code instructs JavaScript on _how_ it should perform each step. With _declarative_ code, we tell JavaScript what we want to be done, and let JavaScript take care of performing the steps.

React is declarative because we write the code that we _want_, and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.

### Further Research
- [Imperative vs Declarative Programming by Tyler](https://tylermcginnis.com/imperative-vs-declarative-programming/)
- [Difference between declarative and imperative in ReactJS from StackOverflow](https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js)
