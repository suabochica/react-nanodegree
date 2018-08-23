Native Features
===============

The missing topic in this course is the use of the Native APIs. The Native APIs allow us to handle animations, geolocation, notifications and the phone camera with React Native. Also, let us to prepare the apps for the iOS and Android app stores.

Geolocation
===========
A common feature of native applications is the ability to access and receive updates about the user's current location. Like most things, Expo makes this rather straightforward by giving us a JavaScript API that will work on both iOS and Android

```js
import { Location } from 'expo'
```

When you dealing with location services you need two features:

1. `getCurrentPositionAsync`:  Gets the current location of the device, without watching for future updates
2. `watchPositionAsync`: Also get the current location of the device, but it will also subscribe to location updates. This way, you'll be notified if that device moves location.

Please checl the [Location](https://docs.expo.io/versions/latest/sdk/location.html) documentation.

## Tips
Whenever you're dealing with a feature that requires the user's permission to work properly, it's important that you account for all the different UI options that could be shown. For example, when dealing with a user's location, there are three scenarios to manage:

1. The user gives you permission to view their location (best-case scenario).
2. The user decides to neither deny nor grant you permission to their location.
3. The user denies giving you access to their location.

In an ideal world, the user would always grant you permission to whatever you'd like, but, this isn't always the case and as a UI developer, you need to plan accordingly for those moments.

## Summary
In this concept, we saw how to use Expo's `Location` property to watch the user's current location using `watchPositionAsync`.


Animations
==========

Animations are a fundamental aspect of any native application. Because of this, React Native comes built in with an animations library called `Animated`. The whole idea of Animated is that it "focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and simple start/stop methods to control time-based animation execution." In other words, Animated allows you to establish different types of transformations on specific values. For example, you could easily animate an image's `opacity` property from 0 to 1, giving the effect that the image is slowly appearing.

There are three types of animation configurations that you have access to out of the box with Animated:

1. `decay`: Start with an initial velocity and gradually slow to a stop.
2. `spring`: Provides a normal spring type of animation
3. `timing`: Animates a value of a specified time.

```js
import React { Component } from 'react'
import { Animated, Image, StyleSheet, View } from 'react-native'

export default class extends Component {
    state = {
        opacity: new Animated.Value(0),
        height: new Animated.Value(0),
        width: new Animated.Value(0),
    }

    componentDidMount () {
        const { opacity, height, width } = this.state

        Animated.timing(opacity, { toValue: 1, duration: 100 }).start()
        Animated.timing(height, { toValue: 300, speed: 5 }).start()
        Animated.timing(width, { toValue: 300, speed: 5 }).start()
    }

    render () {
        const { opacity, height, width } = this.state

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={[styles.img, { opacity, height, width }]}
                    source={{uri: 'https://www.clavecd.es/wp-content/uploads/buy-the-legend-of-zelda-breath-of-the-wild-expansion-pass-cd-key-pc-download-img1.jpg'}}
                />
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
        },
        img: {
            height: 200,
            width: 200,
        }
    })
}
```

## Cautions
Once you fully grasp the Animated API, a whole new world will open up to you. It sounds great, but this can be a double-edged sword. It's a great thing because you now have the ability to enhance the feel of your application with animations. However, with great power comes great responsibility.

The goal of having animations is to add to the user's experience, not distract from it. By keeping this in mind whenever you're adding animations to your app, not only will your app perform better -- you'll also minimize the risk of ruining your user's experience with unnecessary animations.

## Summary
In this section we learned how to improve your application's UX by using React Native's [`Animated`](https://facebook.github.io/react-native/docs/animated.html) library to add thoughtful animations.

Local Notifications
===================
A Notification is a pop up you get on the phone wheted or not the app is running. Expo provide us a `Notifications` API which has `scheduleLocalNotificationAsync` method on it, to show the local notification in our app in a respective hour.

When dealing with notifications, it's important to understand that there are two different types: **push notifications**, and **local notifications**.

1. **Local Notificaions:** Local notifications do not require any external infrastructure; they happen entirely on the device itself. That means that the only requirement for the device to display the notification is that the device is on.
2. **Push Notificatoin:** Push notifications require you to have a server which handles pushing the notification to your user's devices when a certain event occurs.

But since we are not incorporating an external server, and all the logic about when we should show the notification can be done on the phone itself -- local notifications will be the most ideal for our application. Let's see how it is done!

> ## Notification on iOS
> Before we jump in, note that with iOS, notifications (both push notifications and local notifications) **do not** appear at the top of the screen automatically if the application is in the foreground. Moreover, push notifications **do not** function in the iOS simulator (whether or not Expo is used).

## Summary
In this section, you learned how to add local notifications to your app using Expo's [Notifications](https://docs.expo.io/versions/latest/sdk/notifications.html) property.

Handling Photos
===============
At this point it shouldn't be a surprise that Expo provides a nice JavaScript abstraction over the native iOS and Android approaches to accessing photos from the device's photo gallery. The name of this property is `ImagePicker` and it does exactly what you would expect: _"Provides access to the system's UI for selecting images from the phone's photo library or taking a photo with the camera."_

## Summary
In this section, you learned about Expo's [`ImagePicker`](https://docs.expo.io/versions/latest/sdk/imagepicker.html) component to grab images from the phone's photo gallery.

App Store Preparation
=====================

When you submit an app to either app store, there is more information you need to submit than just the app itself. For example, you need details such as the app description, icon, etc. Luckily for us, Expo make it easy to specify these sorts of things just by editing the `app.json` file at the root of our app folder. Here's an example of configurations we'll be adding in our UdaciFitness app.

## What are .apk and .ipa files?
Before you submit your application to either app store, you need to "package" it appropriately. The iOS App Store will ask you for a `.ipa` ("iOS App Store Package") file and the Android Google Play store will ask you for a `.apk` ("Android Application Package") file. When you create either an ipa or a apk file, you're essentially creating a bundle of all of the necessary information that either App store needs in order to process and run your application.

The easiest way to generate both the `.apk` and `.ipa` files is to use Expo's `exp` CLI.

    npm install -g exp

Once that's installed (and after you've configured your `app.json` file), you can run:

    exp build:ios
    exp build:andoid

to build the respective packages. Plese notice that to create the package the react server should be mount.

Note that these will take anywhere from 10-20 minutes to build, so you'll need to be patient. To check the status of the build you can run `exp build:status`. Eventually that command will give you a URL where you can go to download either your .ipa or .apk files.

## Rest of the way
he hardest part about uploading your application to either app store is generating a .ipa or .apk file. Because we covered that in the previous section, we're not going to cover the entire process of actually uploading your app. The following documents should help you: for iOS, [Uploading a Build for an App](https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Chapters/UploadingBinariesforanApp.html#//apple_ref/doc/uid/TP40011225-CH38-SW1) and for Android, [Upload an App](https://support.google.com/googleplay/android-developer/answer/113469?hl=en).

## Summary
In this section we learned about preparing your application for the app store and generating .apk and .ipa files.