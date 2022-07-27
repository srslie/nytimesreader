# NY Times Top Stories Reader

This is take home project based off [this prompt](https://mod4.turing.edu/projects/take_home/take_home_fe).

This uses the [NY Times Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview).

MVP requires showing:

- A list of articles
- A “detailed” view for each article (as opposed to summary/list view)
- Articles in the list must link to the detailed article view you create
- Some sort of search, filter, OR sort

## Using the App

As a user:
 - visit the page (here)[https://ny-times-reader.herokuapp.com/]

As a developer:
 - pull down this code locally
 - run tests using `npm test`
 - 
## Developing the App

### Tech Stack:

- Manage the API with [NYT Developer Site](https://developer.nytimes.com/my-apps/14d62669-1fc1-40ec-8fc3-278084a899eb).
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Manages the API key securely using [react-scripts](https://create-react-app.dev/docs/adding-custom-environment-variables/).
- Integration Testing through [Cypress](https://www.cypress.io/).
- Semantic HTML, CSS
### Commands

-  `npm start`
 - Runs the app in the development mode.\
 - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
   - The page will reload when you make changes.\
 - You may also see any lint errors in the console.
- `npm test`
 - Launches the test runner in the interactive watch mode.\
 - See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- `npm run build`
  - Builds the app for production to the `build` folder.\
  - It correctly bundles React in production mode and optimizes the build for the best performance.
- [deployment](https://facebook.github.io/create-react-app/docs/deployment) 
  - hosted on Heroku