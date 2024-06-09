# README

## Requirements

```shell
  nodejs 22.0.0
```

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

# and run the yarn again to install the dev dependencies
$ yarn
```