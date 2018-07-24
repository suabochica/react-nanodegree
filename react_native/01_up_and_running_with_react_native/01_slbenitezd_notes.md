What Is React Native and Why Does It Exist?
===========================================

**React Native** allows you to use react to build native iOS and Android applications. An adventage of use React Native is that you can have a single UI Team, instead of having a web team, an iOS team and an android. Maybe you have heard the phrase:

_"Write once, run anywhere"_

The idea of this is that would be nice if you could use a single code base on the web, on iOs and on Android. Some project like Adobe Phonegap and Apache Cordova encourage this idea. However, in practice this is very difficult, because each of those platforms have such a unique experience. Unlike this phrase, React Native's motto is:

_"Learn once, write anywhere"_

Once you learn React, you should be able to take thos same principle and not only build UI for the web, but also for native platforms like iOS and Android. So. instead of sharing the same codebase amongst all the different platforms, we are sharing the same principles: Component composition and declarative UI.

## React Native under the hood
When React was first introduced, a big selling point as the **Virtual DOM**. The idea is standard in most UI libraries now, but when it first came ot, it was groundbreaking! A key process in the Virtual DOM is the **reconciliation**. The end goal of reconciliation is to update the UI based on a new state in the most efficient way possible. To do this, React will construct a new tree of React elements. Once it has this new tree, React will `diff` it against the previous element tree in order to figure out how the UI should change in response to the new state. By doing this, React will then know the exact change which occured, and by knowing exactly what changes ocurrred, it will able to minimize its footprint on the UI by only making updates where absoulutely necessary.

The process of creating an object representation of the DOM is the whole idea behind the "Virtual DOM". Now, what if instead of targeting and rendering to the DOM, we need to target and render to another platform –iOS or Android–. This is the exact idea behind React Native. Instead of rendering to the web's DOM, React Native renders to native iOS or Android views.

## Summary
React Native's "learn once, write anywhere" approach allows us to use the same principles that we know to develop for both web and native platforms. After all, under the hood many of the same principles of the Virtual DOM, reconciliation, and diffing algorithm apply whether it's a web application built with React or a mobile application built with React Native.

Dev Environments Setup
======================

## Create React Native App
When we build an app throughout this course, we will be building it for both, Android and iOS. One of the puzzles at hands is that we will need to support two separate development environments: iOS Xcode and Android Android Studio. this introduce complexity into this course; after all, these development environments have _their own set of courses!_

Luckily for us, there is a new tool called **Create React Native App** that allow us to develop in both environments without use Xcode or Android Studio. It is similar to **Create React App** in that all you have to do is install the CLI via NPM. Then via CLI, you can easily scaffold a brand new React Native Project

### Pros
- Minimizes the amount of time to create a "hello world" application.
- Develop on your own device.
- You just need  one build tool

### Cons
- If you are building an app that is going to be added to an existing native iOS or Android application CRNA won't work
- If you need to build your own bridge between React Native and some native API that CRNA doesn't expose, CRNA won't work.

### Install Create React Native App
Go ahead and intall it once globally:

    npm install -g create-react-native-app

> Issues with npm v5, so the `create-react-native-package` is not available for this version

Or feel free to use **yarn**:

    yarn global add create-react-native-app

or
    yarn create react-native-app my-app

> It is required install watchman(`brew install watchman`), to enable the `yarn start` command.

## Expo
Expo is a service that makes just about everything involving React Native a whole lot easier. The idea behind Expo is that there is no need to use Android Studio or Xcode. What is more: it even allow us to develop for iOS with Windows or even Linux!

With Expo, you can load and run projects built by CRNA, with the same JavaScript you already know. There is no need to compile any native code. And much like Create React App, using Expo with CRNA lets us get an application up and running with almost no configuration.

So, time to download the Expo Mobile App from the store of your device.

> Simulators are an alternative but personally I prefer to develop and test in a real device. You save time in configuration and you get an accuarate final experience of your mobile app.

## The Environmet
When creating and app with Create React Native App, you app will support:

- ES5 and ES6 support
- Object Spread Operator
- Asynchronous Functions
- JSX
- Flow
- Fetch

Since we are using purely JavaScript to build mobile apps, this list should come as no surprise!. Before we start actually building the app, there are some files that are necessary for the project, but aren´t necessary for you understand. These files are inside the `utils` folder.

## Summary

**Create React Native App** is similar to **Create React App** in that it scaffolds and builds a starte application with minimal configuration. This allow us to have an app up and running without the need for Xcode or Android Studio! Som of the benefits include:

- Minimal time to "Hello World"
- Development on your own device via **Expo**
- A single build tool
- No lock-in

You can also set up **simulators** to aid in development as well. But regardless of which platform we choose to develop (iOS or Android), and which environment we are in (Mac, Windows or Linux), we are building with the same old JavaScript that we are used to!