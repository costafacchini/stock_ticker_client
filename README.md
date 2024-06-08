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

## Troubleshooting

If you run the `yarn dev` command and the error `vite: command not found` appears, to solve the problem you need to run the commands below:

```shell
# It is necessary to configure the node environment for development
$ export NODE_ENV=development

# and run the yarn again to install the dev dependencies
$ yarn
```