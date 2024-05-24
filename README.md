# DJS05 README Reflection: Functional Programming and Redux-inspired Store

## Project Overview

In this project, I implemented a Redux-inspired store to manage and log the state of a counting Tally App. The app allows users to increment, decrement, reset, add, and subtract from a counter, and the state is updated and logged to the console accordingly.

## Lessons Learnt in Functional Programming

Through this project, I gained a deeper understanding of functional programming concepts, such as:

1. **Immutability**: I learned to treat state as immutable data structures, which ensures predictability and prevents unintended side effects.
2. **Pure Functions**: I understood the importance of writing pure functions, which have no side effects and always return the same output given the same inputs.
3. **Higher-Order Functions**: I used higher-order functions, such as reduce and map, to simplify code and make it more composable.

## How the Code Works
The code is structured into several modules:

**actions.js**: Defines action creators for incrementing, decrementing, resetting, adding, and subtracting from the counter.
**reducer.js**: Implements the reducer function, which updates the state based on the actions dispatched.
**store.js**: Creates the Redux-inspired store, which manages the state and provides methods for dispatching actions and subscribing to state changes.
**index.js**: Initializes the store, subscribes to state changes, and logs the state to the console.
The code uses a functional programming approach, with a focus on immutability and pure functions. The reducer function is a pure function that takes the current state and an action as inputs and returns a new state. The store uses the reducer function to update the state and notify subscribers of state changes.

## Why This is the Best Way to Structure Code

This project demonstrates the benefits of structuring code using functional programming principles and a Redux-inspired store:

1. **Predictability**: The code is predictable and easy to reason about, thanks to immutability and pure functions.
2. **Modularity**: The code is modular and composable, making it easy to add new features or modify existing ones.
3. **Scalability**: The code is scalable and can handle complex state management tasks with ease.

## Redux-inspired Store

The Redux-inspired store is a key component of this project. It provides a centralized way to manage and log the state of the Tally App. The store:

1. **Manages State**: The store manages the state of the app, ensuring that it is updated correctly and predictably.
2. **Logs State**: The store logs the state to the console, providing a clear and concise way to track state changes.


Provides a Single Source of Truth: The store provides a single source of truth for the app's state, making it easy to debug and reason about the code.
Overall, this project demonstrates the power of functional programming and Redux-inspired stores in building robust, scalable, and maintainable software applications.
