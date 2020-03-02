INSTALL
x Reactstrap & Bootstrap:
- npm i --save bootstrap reactstrap

COMPONENTS
InputForm: handle user input in the form

App: reflect changes made to the state in InputForm in the OutputLeaderboard. When the user enters data in through our form and hits the submit button, our state is changing. When that happens, we need to reflect that change in the other child component — which will end up being the OutputLeaderboard component displaying all of the data. So we send the change in state up to the parent so it can then be communicated down to the other child

OutpuLeaderboard: pass the final state object as props. Render table (sort the scores & players in descending order)

Review:
-Received input from an end-user in one child component (InputForm)
-Stored that data in a local state (InputForm)
-Created a shared state at the top level (App)
-Populated the shared state with multiple instances of the local state
-Output the shared state to a different child component (OutputLeaderboard)
