import React, { Component } from 'react';
import Card from './card';

class Player extends Component {
  constructor(props) {
    super(props);
  };

  renderHand() {
    let hand = this.props.hand.map((card, index) => {
      return(<Card {...card} key={index} />)
    });
    return hand;
  };

  render() {
    let score = this.props.score
    let isWinner = this.props.winner

    return(
      <div>
        <h1 id="score">{score}</h1>
        {this.renderHand()}
        {isWinner && <h1>Winner!</h1>}
      </div>
    )
  }
}

export default Player;
