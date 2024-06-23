# README

## Requirements

```shell
  nodejs 22.0.0
```

## Problem

Build a single page application which allows input of a stock ticker and displays the following for the date range 1/1/2023 until 12/31/2023.
1. Average stock price in the given range (in this example it is from 1/1/2023 until 12/31/2023).
2. Maximum/Minimum volume in the given range
3. Maximum/Minimum stock price in the given range

## Constraints and Requirements

1. The React App should be composed of two components with a parent child relationship. The parent component should pass the ticker to be searched to a child component which displays the results.
2. Vanilla CSS or SCSS for styling is preferred.
3. The use of React Hooks is required.
4. The use of Redux to store the result of the API is required.
5. Backend should use ruby on rails in conjunction with the following polygon api for ticker data.

### Expected Deliverables (FRONTEND - this repository)

- [X] The React App should be composed of two components with a parent child relationship. The parent component should pass the ticker to be searched to a child component which displays the results.
- [X] Vanilla CSS or SCSS for styling is preferred.
- [X] The use of React Hooks is required.
- [X] The use of Redux to store the result of the API is required.

### Expected Deliverables (BACKEND)

The tasks part of the backend was developed in a separate repository. You can find the repository on my github using the same name as this repository and removing the suffix `_client`

## Setup Project

```shell
# run dev
$ yarn dev
```

You may need to change the server url configuration in the file `src/screens/App/appAPI.js`

This is the current configuration `http://127.0.0.1:3000/v1/stock_report/`

## Troubleshooting

If you run the `yarn dev` command and the error `vite: command not found` appears, to solve the problem you need to run the commands below:

```shell
# It is necessary to configure the node environment for development
$ export NODE_ENV=development

# Check again to confirm that NODE_ENV has been set
$ echo $NODE_ENV

# Should return
development

# and run the yarn again to install the dev dependencies
$ yarn install
```

## Improvements

- [ ] Create automated tests
- [ ] Add linter