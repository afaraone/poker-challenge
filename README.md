[![Build Status](https://travis-ci.com/afaraone/poker-challenge.svg?branch=master)](https://travis-ci.com/afaraone/poker-challenge)

# Poker Tech Test
## Description
A simple card-playing app, where users can select the number of players and the number of cards for each hand. Scores are displayed for each hand along with a label for the winner.

## Goals
 - [x] Simple user interface created in React.
 - [x] Hands are sorted by suit then rank.
 - [x] More complex scoring system: Pairs, Three of a Kinds, and Straights.
 - [x] Fully deployed using Travis CI/Heroku.
 - [x] Works on a smartphone.
 - [ ] Tie-breaker system.
 - [ ] Keeps a record of all games played.

## Tech Stack
 - NodeJS, React (using Create-React-App)
 - Testing: Jest, Enzyme

## Deployment
The app is deployed using CI/CD via TravisCI and Heroku. [Link](https://poker-challenge.herokuapp.com/)

## Instructions
 - Clone repo.
 - Run `npm install` to install dependencies.
 - Run `npm start` to launch a local server.
 - Run `npm test` to launch test-runner. Run `npm run coverage` to view coverage.

## Testing
Unit tests and feature tests were made for this app. Tests are stored in `src/__tests__`
```
> poker-challenge@0.1.0 coverage /home/andres/Projects/tech-test/poker-challenge
> react-scripts test --coverage --collectCoverageFrom=src/**/*.js --collectCoverageFrom=!src/index.js

 PASS  src/__test__/card.test.js
 PASS  src/__test__/deck.test.js
 PASS  src/__test__/game.test.js
 PASS  src/__test__/player.test.js
 PASS  src/__test__/feature.test.js
 PASS  src/__test__/gameForm.test.js
 PASS  src/__test__/score.test.js
 PASS  src/__test__/createPlayerObjects.test.js
-------------------------|----------|----------|----------|----------|-------------------|
File                     |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------|----------|----------|----------|----------|-------------------|
All files                |      100 |      100 |      100 |      100 |                   |
 src                     |      100 |      100 |      100 |      100 |                   |
  createPlayerObjects.js |      100 |      100 |      100 |      100 |                   |
  deck.js                |      100 |      100 |      100 |      100 |                   |
  score.js               |      100 |      100 |      100 |      100 |                   |
  setupTests.js          |      100 |      100 |      100 |      100 |                   |
 src/components          |      100 |      100 |      100 |      100 |                   |
  card.js                |      100 |      100 |      100 |      100 |                   |
  game.js                |      100 |      100 |      100 |      100 |                   |
  gameForm.js            |      100 |      100 |      100 |      100 |                   |
  player.js              |      100 |      100 |      100 |      100 |                   |
-------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 8 passed, 8 total
Tests:       25 passed, 25 total
Snapshots:   0 total
Time:        4.815s
Ran all test suites.

```

## Approach
This app is made up of React Components (in `src/components`) and functions (in `src`).

`deck.js` has methods concerned with creating hands, which are arrays of card objects:
`[{rank: 4, suit: 0}, {rank: 8, suit: 0}, {rank: 3, suit: 2}, {rank: 6, suit: 3}]`.

It has one public method `deal` which takes two arguments: number of players, and number of cards, and returns an array of hands:

```
console.log(deal(2,4))
[[{rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}],
[{rank: 3, suit: 2}, {rank: 4, suit: 2}, {rank: 5, suit: 2}, {rank: 6, suit: 2}]]
```
Hands are all sorted using `sortHand`.

`score.js` is concerned with calculating the score for a hand. The public method `getScore` takes a hand as an argument and returns score as an integer.
```
console.log(getScore([{rank: 2, suit: 1}, {rank: 4, suit: 2}, {rank: 3, suit: 2}]))
49
```
It uses private methods to calculate bonuses for pairs, three of a kinds and straights.

`createPlayerObjects.js` create player objects, which have `hand`, `score` and `winner` properties. The public method `createPlayerObjects` takes an array of hands (the return value from `deal`) and returns an an array of player objects.

```
let dealt cards =  [[{rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}],
                   [{rank: 3, suit: 2}, {rank: 4, suit: 2}, {rank: 5, suit: 2}, {rank: 6, suit: 2}]]
console.log(createPlayerObjects(dealtCards))
[{hand: [{rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}], score: 50, winner: false},
{hand: [{rank: 3, suit: 2}, {rank: 4, suit: 2}, {rank: 5, suit: 2}, {rank: 6, suit: 2}], score: 58, winner: true}]
```
These three functions cover the bulk of the functionality. This way, the React components are focused on the presentational aspect. `Game` is the root container component, it stores the state (player objects). `GameForm` manages the textboxes. `Player` and `Card` are the presentational components.

## Reflection

I think I overcomplicated some of the functions, such as the `deal` method. However I think I separated the concerns fairly well. I hope this means it can be scalable for future functionality (new scoring rules, new types of cards etc).

Javascript lacks quite a lot of the built-in functions that other languages use, especially the `shuffle` function. I should perhaps have made use of dependencies instead of attempting to "reinvent the wheel".

Originally, I made the app using Javascript ES6 classes. [link](https://github.com/afaraone/poker-challenge/commit/e81b234ff9f24741527aaf28e639b4aa270273ee) However, when attempting to integrate this into React, I realised that this is not recommended. e.g:
```
class Game extends Component {
  constructor(props) {
   super(props); 
   this.state = {
    deck = new Deck();   // Initialising a class.
    hand = this.state.deck.deal(3, 5) // This does not work.
   };
  };
};
```
As a result, I had to spend some time redesigning my app.

## Further Features

 - Refactor the `deal` method. 
 - Add `name` property to Player objects. This would make the website more clear.
 - Integrate a database to record all the scores.
 - Add some CSS styling.
