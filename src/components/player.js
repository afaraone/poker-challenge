import React from 'react';
import Card from './card';

// renders a player consisting of a score, winner message and Card components
function Player(props) {
  let {score, winner, hand} = props

  return(
    <div className="player">
      <h1 id="score">Score: {score}</h1>
      <br />
      {renderHand(hand)}
      <br />
      {winner && <h1>Winner!</h1>}
    </div>
  );
};

// maps hand to array of Card React components
function renderHand(hand) {
  let cardComponents = hand.map((card, index) => {
    return(<Card {...card} key={index} />)
  });
  return cardComponents;
};


export default Player;
