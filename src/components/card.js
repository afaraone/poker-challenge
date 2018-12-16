import React, {Component} from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  };

  formatSuit(suit) {
    let suitKey = {0: "♣️", 1: "♦️", 2: "♠️", 3: "♥️"};
    return suitKey[suit];
  }

  render() {
    let rank = this.props.rank;
    let suit = this.formatSuit(this.props.suit);

    return(
      <>
        <h2>{rank}{suit}</h2>
      </>
    );
  };
};

export default Card;
