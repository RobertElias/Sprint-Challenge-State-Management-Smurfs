1. What problem does the context API help solve?
# you no longer have to pass props down from component to component - what React devs call “prop drilling”. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
# Actions: are objects with two properties (type, payload). Each action must have atype property string that explains what interactions just occured. For example 'LOG_USER'. The payload property is just the data that goes along for the ride during the interaction. 

# Reducers: A reducer is a function that determines changes to an application's state. It uses the action it receives to determine this change. ... Redux relies heavily on reducer functions that take the previous state and an action in order to execute the next state.

# Store: Is basically our state managment. When the application state changes, we clone the state object, modify the clone, and replace the original state with the new copy. We never mutate the original object, and we never write to our store object.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
# With application state every component is able to have access to the same state. With Component State: only the contents of said component are able to have access to state. Just like local and global. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
# Redux-Thunk is middleware package that allows the actions to consume promises. It also calls for action creator to perform asynchronous API calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

# I like both Redux and Context. However to manage extensive files or a large application then Redux would be the go to. If the app is small and managable then I would use Context API.