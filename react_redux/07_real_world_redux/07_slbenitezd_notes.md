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

1. Identify what eact view should look like
2. Break each view into a hierarchy of components
3. Determine what events happen in the app
4. Determine what data lives in the store

### Coding in Stages
We'll be building the project along together, breaking down each phase of the project's development. The first thing we we'll do is take a look at the different views the final project should have.

Let's dive in!


