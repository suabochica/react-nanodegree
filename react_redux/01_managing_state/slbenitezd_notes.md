Managing State
==============

Some bugs are caused by state mismanagement. This means that your application was expecting the state to be one thing, but it is actually something else. The goal of _Redux_ is to make state management in any app you build, more predictable. This is a quality improvement.

The Store
---------

A traditional app has the application's data is sprinkled throughout the app. Redux purpose store the application data outside of the app and is just referenced by the app. With a change like this, if the data needs to be modified at all, then all of the data is located in one place and needs to be only changed once. Then the areas of the app that are referencing pieces of data, will be updated since the source they're pulling from has changed.