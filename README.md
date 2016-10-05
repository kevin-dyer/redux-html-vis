## Requirements
* node `^4.5.0`
* npm `^2.15.9`

## Getting Started
  npm install
  
  export PORT=<YOUR PORT NUMBER> # To run on a different port, set PORT env variable before calling `npm start`
                                 # If changing port, also need to change it in src/auth/config.js for server API calls
  
  npm start           # Start dev server, default port 3000
                      # Note: hot module reloading is not working, need to manually refresh page
  
## Testing
  npm run test        # Runs unit test
  npm run test:dev    # Runs Karma and watches for changes to re-run tests
  npm run lint        # Lint all js files

## Deployment
  npm run deploy      # Runs linter, tests, and then, on success, compiles your application to ~/dist.
  npm run deploy:dev  # Sets NODE_ENV to "development"
  npm run deploy:prod # Sets NODE_ENV to "production"
  npm run compile     # Compile application to ~/dist

## Express Node back end
  stubbed authentication enpoints:
  POST:   /auth           # for sign in and sign up
    response:
    status code: 200
    body: {
      "uid": 'USER_EMAIL_ADDRESS',
      "token": 'AUTHENTICATION_TOKEN',
      "provider": 'email',
      "email": 'USER_EMAIL_ADDRESS'
    }
  DELETE:  /auth/sign_out  # for signing out
    response:
    status code: 200
    body: {
      message: "user logged out"
    }

  There is no database to store user data.
  
## Libraries Used
  This app was started from https://github.com/davezuko/react-redux-starter-kit
  written by David Zukowski. The webpack config, server configs and some file structure was used, However most of the repo was significantly changed for this project.

  Front end authentication accomplished with Redux Auth Wrapper: https://github.com/mjrussell/redux-auth-wrapper

  localstorage library used to save user state: https://github.com/elgerlambert/redux-localstorage

  Material UI was used for styling. Note that this library uses inline styling so to modify its components, overriding inline styles were necessary.

  D3 used for data visualization

## Known Issues
  I was not able to get redux router working properly. I couldnt get the push action working properly and my implementation of Redux Auth Wrapper would not redirect to the path provided in the 'redirect' url query parameter after loggin success. As a result, I added browserHistory.push('/') to the user auth ajax success response in actions.js.

  UI action triggers need to be tested. I was not able to select the input fields generated from Material UI using Enzyme.

  Async action tests need to be implemented. I was not able to mock fetch requests from the isomorphic-fetch library.

  The password placeholder text overlaps existing text from auto fill. This is a known issue with Material UI:
    https://github.com/callemall/material-ui/issues/718



  Enjoy

  Written By Kevin Dyer
  thedude136895@gmail.com