# Events Page

A simple vanhack events page MVP for hackathon

![](src/assets/images/app-preview.png)

## How to test this implementation

In the project directory, you can run:

- `yarn`: Intalling the dependencies
- `yarn start` : Start in development mode
- `yarn server:start`: Start server with fake data
- `yarn test` : Run unit tests
- `yarn coverage`: Run coverage tests

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Open [http://localhost:3001/events](http://localhost:3001/events) to see `fake-api` running.

> Warning: To see the events page working correctly, you need to start the server (yarn server:start)

> Info: This project use Create React App

## Built With

- [Create React App](https://create-react-app.dev/) - Set up a modern web app by running one command.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for browser and node.js
- [Styled Components](https://www.styled-components.com/) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress
- [React-Slick](https://react-slick.neostack.com/) - React carousel component

## Setup

- `code style` - This project was set up with `eslint + prettier + editorconfig` follow the **airbnb** style
- `tests` - We use `jest` with `@testing-library` for make the tests and add coverage script with some customizations in _jest_ property inside package.json
- `configs`- We set up the `react-app-rewired` for extend CRA configuration without run the `eject` script
- `api` - we define a fake-api using `json-server`, see `db.json` for more details
- `style` - using styled-components to control components style more easily with JS

## Decisions and ToDo

- This implementation is a simple MVP with focus in the frontend layer
- My initial plan was to design the `events page` and then design the `courses` page but time passed and I missed the deadline

  ### To do

  - add **redux** to control items that user applied for
  - improve coverage tests (for all files)
  - add acceptance tests using `cypress` or `selenium`
  - add standart components to follow `style-guide` definitions
  - add error handler and show messages with `react-toastify`
  - add `cicd` process to control build
  - setup `semantic-release` to control version based on `semantic commit messages``

## Author

- **Marcio Mendes** - [mmendesas](https://github.com/mmendesas)

## License

This project is licensed under the MIT License
