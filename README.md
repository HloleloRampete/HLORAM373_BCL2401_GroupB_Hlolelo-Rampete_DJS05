# HLORAM373_BCL2401_GroupB_Hlolelo-Rampete_DJS05
BUILDING A REDUX-INSPIRED STORE FOR A TALLY APP


In this challenge, you will venture into the realm of state management by constructing a Redux-inspired store to manage the state of a simple Tally App. Your primary goal is to manage the app's state changes efficiently, focusing on core functionalities like incrementing, decrementing, and resetting a counter. Instead of rendering changes on the UI, you'll subscribe to state updates and log them to the console, highlighting the power of state management in applications.

## Objective
Create a minimalistic, Redux-inspired store to manage and log the state of a counting Tally App. Your implementation will not involve UI rendering; instead, it will use console logs to demonstrate state management effectively.

Observer Pattern resource from Refactoring Guru: https://refactoring.guru/design-patterns/observer

User Stories (Gherkin Syntax)
 

Your challenge will encompass the following scenarios, tested through your store's implementation:

SCENARIO 1: Initial State Verification
 

GIVEN no interactions have been performed yet
WHEN the “getState” method is run
AND the result is logged to the console
AND the browser console is open
THEN the state should show a count of 0
SCENARIO 2: Incrementing the Counter
 

GIVEN no interactions have been performed yet
WHEN an “ADD” action is dispatched
AND another “ADD” action is dispatched
AND the browser console is open
THEN the state should show a count of 2
SCENARIO 3: Decrementing the Counter
 

GIVEN the current count in the state is 2
WHEN a “SUBTRACT” action is dispatched
AND the browser console is open
THEN the state should display a count of 1
SCENARIO 4: Resetting the Counter
 

GIVEN the current count in the state is 1
WHEN a “RESET” action is dispatched
AND the browser console is open
THEN the state should display a count of 0