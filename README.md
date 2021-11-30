# react-postcode-checker

This project is a simple web application to work out if a given postcode is within a particualar service area or not within UK.

## Project Setup

- Install the dependencies using `npm install` install node if it complains
- Run the application using `npm start`
- Will open in localhost:8080
- Build the production application using `npm build`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm test`

To Run the test

### `npm run cypress:open`

Run Integration test

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run format`

Will format the source file.

### `npm run lint`

Will show linting issue

## Tech Stack

React,React testing library, Jest, Cypress, Webpack, Prettier, Eslint

## Test Scenario:

1. Postcodes are grouped into larger blocks called LSOAs. This is returned from the API when we query a postcode. We want to allow any postcode in an LSOA starting "Southwark" or "Lambeth". Example postcodes for these LSOAs are SE1 7QD and SE1 7QA respectively.
2. Some postcodes are unknown by the API or may be served despite being outside of the allowed LSOAs. We need to be able to allow these anyway, even though the API does not recognise them. SH24 1AA and SH24 1AB are both examples of unknown postcodes that we want to serve.
3. Any postcode not in the LSOA allowed list or the Postcode allowed list is not servable.
