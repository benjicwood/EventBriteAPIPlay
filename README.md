# EventBrite API
The App has been created in React with Redux as a Web App using the eventbrite api found at https://www.eventbriteapi.com/v3/events/search/?token=VBUSKKCQ2VTXKPOP34PX

# Heroku

https://bceventbriteapiplay.herokuapp.com/

# Running Locally

In the command line navigate to the App folder and run the command 'npm install' to install all the dependencies from the npm package manager. Run the App with 'npm run express-server' to start webpack and run the server.

The app will be running at http://localhost:3000/

# Tests

Running the command 'npm test' or 'npm run test' in the command line with the server running will show the result the tests.

Actions: Tests that the action functions return an object when given the correct type and number of arguments
Components: Shallow testing that the components called render successfully, checks necessary props are passed down and checks that the given state is available.
Helper Functions: Tests that the functions extracted into their own modules work as intended.
Reducer: Tests that the correct action is dispatched when passed to the reducer. Also tests that the initial state is not mutated when this happens.
