[![Deploy](https://github.com/stevesdodd/sd-games/actions/workflows/main.yml/badge.svg)](https://github.com/stevesdodd/sd-games/actions/workflows/main.yml)

## SD Games

Welcome to SD Games, this repository houses all the code related to the game development tutorials at [Stephen Dodd Tech Game Development](https://stephendoddtech.com/categories/game-development).

The example projects can be found at [sd-games](https://stevesdodd.github.io/sd-games/).

## Running the projects

Each of the projects are in a separate directory. They all follow the same setup. To run a particular project locally change to the given project's directory and run the following commands.

`npm install`: Installs the required projects dependencies.

`npm run build`: Compiles the project to the `build` directory

`npm run serve`: Starts a local file server pointed to the `build` directory.

Open a browser and head to `localhost:8080` to see the current project.

Most of the projects have cold reloading which means if you make a change to the code locally, save and refresh the browser you should see your changes reflected in the browser.
