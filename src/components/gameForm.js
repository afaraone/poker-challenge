import React, { Component } from 'react';

// renders form with callback to parent component
class GameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPlayers: null,
      numCards: null
    };
  };

  // set numPlayers state to integer
  setNumPlayers(numString) {
    this.setState({
      numPlayers: parseInt(numString)
    });
  };

  // set numCards state to integer
  setNumCards(numString) {
    this.setState({
      numCards: parseInt(numString)
    });
  };

  render() {
    let numPlayers = this.state.numPlayers;
    let numCards = this.state.numCards;

    return(
      <div>
        <input id="num-players-text"
        type="text" placeholder="Number of Players" onChange={e => this.setNumPlayers(e.target.value)} />

        <input id="num-cards-text"
        type="text" placeholder="Number of Cards" onChange={e => this.setNumCards(e.target.value)} />

        <button id="play-btn" onClick={() => this.props.play(numPlayers, numCards)}>
          Play
        </button>
      </div>
    );
  };
};

export default GameForm;
