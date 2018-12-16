import React from 'react';
import Card from './card';

function Player(props) {
  let {score, winner, hand} = props

  return(
    <div>
      <h1 id="score">{score}</h1>
      {renderHand(hand)}
      {winner && <h1>Winner!</h1>}
    </div>
  )
}

function renderHand(hand) {
  let cardComponents = hand.map((card, index) => {
    return(<Card {...card} key={index} />)
  });
  return cardComponents;
};


export default Player;
