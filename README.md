Life
====

An implementation of Conway's Game of Life using React and Redux Zero.

See it live at [https://olmsted.io/life](https://olmsted.io/life)

<img src="https://olmsted.io/images/life.gif">

> The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
> The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input.
>
> The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible 
> states, alive or dead, or "populated" or "unpopulated". Every cell interacts with its eight neighbours, which are the cells that are 
> horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
>
>  1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
>  2. Any live cell with two or three live neighbours lives on to the next generation.
>  3. Any live cell with more than three live neighbours dies, as if by overpopulation.
>  4 Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
>
> "Conway's Game of Life", [en.wikipedia.org](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

Usage
-----

This project uses [Yarn](https://github.com/yarnpkg/yarn) to manage its dependencies and run common tasks. You'll have to 
[install Yarn](https://yarnpkg.com/en/docs/install) to run any of these commands.

To install all dependencies:

```
yarn install
```

To run all unit tests:

```
yarn test
```

To spin up a development server at [http://localhost:3000](http://localhost:3000) and play the game of life!

```
yarn start
```

To create a static build of the project that can be deployed:

```
yarn build
```

The static site is dumped into `/build`, which is not tracked in version control.

Playing the Game of Life
------------------------

The Game of Life is a "zero-player game" – once the initial state of the grid is set, the game "plays" itself. However, we can change the initial state of the grid to prompt some interesting behaviors. 

By default, the initial state of the grid is randomized. You can switch to a specific pattern by pressing the following keys:

* Press `g`: switches to a [Gosper Glider Gun](http://www.conwaylife.com/w/index.php?title=Gosper_glider_gun).
* Press `s`: switches to a [Switch Engine](http://www.conwaylife.com/w/index.php?title=Switch_engine).
* Press `n`: switches to a [Noah's Ark](http://www.conwaylife.com/wiki/Noah%27s_ark).
* Press `r`: randomizes the state of the grid.


Project Structure
-----------------

All source code is located under `src`. I've tried to clearly separate the __domain__ of the game of life (which is written in ordinary Javascript) from the __view__ and __state__ management layers (which are written using [React](https://github.com/facebook/react) and [Redux Zero](https://github.com/concretesolutions/redux-zero/blob/master/README.md) respectively).

Here's a simplified overview of the organization of `src`:

```
src
├── App.js         # The root component of our application.
├── actions        # Redux actions for changing application state.
├── components     # React components to render the game of life.
│   ├── cell
│   └── grid
├── containers     # Maps application state to the props in our components.
├── domain         # The core logic of the game of life.
│   └── helpers
└── store          # Sets up the initial application state.
```

Unit tests for source code are located under `test`.
