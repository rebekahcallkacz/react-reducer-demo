# A Brief Intro to useReducer

This demo was adapted from [this code](https://codesandbox.io/s/github/the-road-to-learn-react/hacker-stories/tree/2021/React-Impossible-States?file=/src/App.js).

[This article](https://kentcdodds.com/blog/should-i-usestate-or-usereducer) shows the difference between using `useState` and `useReducer`. Article summary: use `useState` when you are managing independent state and use `useReducer` when one element of your state relies on another element of your state.

[This article](https://stately.ai/blog/usestate-vs-usereducer-vs-xstate-part-1-modals) shows the difference between using `useState`, `useReducer`, and `useMachine`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# This App

This app loads in stories that can then be deleted by the user. On page load, the stories are fetched. If that is unsuccessful, an error message is displayed to the user. If that is successful, the stories are displayed and the user has the option of deleting stories.

## Potential Actions

- `STORIES_FETCH_INIT` - initialize fetching the stories
- `STORIES_FETCH_SUCCESS` - fetching the stories was successful
- `STORIES_FETCH_FAILURE` - fetching the stories was unsuccessful
- `REMOVE_STORY` - user wants to delete a specific story

## State

- `data` (array) - the stories data
- `isLoading` (boolean) - whether or not the data is being fetched
- `isError` (boolean) - whether or not there was an error when fetching the data
