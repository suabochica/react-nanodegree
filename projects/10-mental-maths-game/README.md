🤯 Mental Math Game
===================

You are given a starter template with a dummy data.

🧰 Tech stack
------------

- npm v9.6.7
- React v16.3.2 + JavaScript

🚀 Run the project
------------------

The zip file not have the `node_modules` folder. So, to run the project please execute:

1. `pnpm i`
2. `pnpm run start`.

You should get the next view when navigate `localhost:3000` in your browser:

![Mental Math Game](assets/00-mental-maths.png)

✅ Task
-------

Create a game that shows an equation of the form `X + Y + Z = P`. Here, X, Y, and Z should be random numbers, and P should be the proposed answer. The user should be able to answer wether it is true that the sum of X, Y, and Z is equals to the proposed answer P. The user gets a point for each question the user answers correctly. The score is displayed in this format: `[number of correct answers]/[number of questions answered]`. Every time the user answers a question, a new question that uses randomly generated numbers is displayed.

🚩 Tips
-------

> - Remember that a Component's constructor is the first thing that runs when the object is created.
> - The render method gets called automatically every time the state changes inside of the component and anytime the value of the component's props changes.

This exercise will help you practice what you've learned in the course so far, including the trickiest part of React - _Managing State_.
