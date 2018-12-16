import React from 'react';

// renders an individual card
function Card(props) {
    let rank = props.rank;
    let suit = formatSuit(props.suit);

    return(
      <>
        <h2>{rank}{suit}</h2>
      </>
    );
}

// converts suit number into emoji
function formatSuit(suit) {
  let suitKey = {0: "♣️", 1: "♦️", 2: "♠️", 3: "♥️"};
  return suitKey[suit];
}

export default Card;
