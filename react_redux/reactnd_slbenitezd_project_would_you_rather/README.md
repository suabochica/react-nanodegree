# Would You Rather? Project Solution

This is my final assessment project for Udacity's React Redux course.

### Run the project

The zip file not have the `node_modules` folder. So, to run the project please execute:

1. `npm i`
2. `yarn start` or `npm start`

### Components

- `<Leaderboard />` Component that represent the leader board of the would you rather game.
- `<Login />` Component to enable the access to the private routes.
- `<Nav />`, Component to navigate between the different pages.
- `<PrivateRoute />` Component to control the access to the pages that need a logged user.
- `<Question />` Component that represent a question of the game.
  - `<QuestionResults />` Component that represent the results of a answered question.
  - `<QuestionOptions />` Component that represent the options of a unanswered question.
- `<Questions />` Component that represent the list of questions.

### Redux

All the redux content is in the folder `/redux`. below the identified entities with their respectives actions:

- questions: GET_QUESTIONS, ADD_QUESTION, SAVE_QUESTIONS
- users: GET_USERS
- authedUser: LOG_IN, LOG_OUT

_Redux Thunk_ was used to enable the `Logger` middleware

Each entity has his respective reducer.

### Hierarchy Components
```js
  <App>
    <Nav>
      <Questions>
        <Question>
          <QuestionOptions>
          <QuestionOptions />
          // OR
          <QuestionResults>
          <QuestionResults />
        <Question />
      <Questions> />
      <Leaederboard>
      <Leaederboard />
      <NewQuestion>
      <NewQuestion />
  <App />
```

### Events
- Questions Component
  - `onChangeFilter`: change the filter between answered and unanswered questions
- NewQuestion Component
- `handleChangeOptionOneText`: change the value of the option one input text.
- `handleChangeOptionTwoText`: change the value of the option two input text.
- `handleSubmit`: submit the creation of a new question.
- QuestionOptions Component
- `handleChangeOptionOne`: change the valio of the option one input radio.
- `handleChangeOptionTwo`: change the valio of the option two input radio.
- `handleSubmit`: submit the anwser of a question by an user.
- Login Component
- `handleChange`: change the value of the user to log in.
- `handleSubmit`: submit the autherized user.
