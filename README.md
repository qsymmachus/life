Life
====

An implementation of Conway's Game of Life using React and Redux Zero.

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

This project uses [Yarn\(https://github.com/yarnpkg/yarn) to manage its dependencies and run common tasks. You'll have to 
[install Yarn](https://yarnpkg.com/en/docs/install) to run any of these commands.

To install all dependencies:

```
yarn install
```

To run all unit tests:

```
yarn test
```

To spin up a development server at [http://localhost:3000](http://localhost:3000) and play the game of life! :

```
yarn start
```
