let mockHand = [
  {rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}
]

let mockHandHigherScore = [
  {rank: 3, suit: 2}, {rank: 4, suit: 2}, {rank: 5, suit: 2}, {rank: 6, suit: 2}
]

let mockDealtCards = [mockHand, mockHandHigherScore, mockHand]

let mockPlayerObject = {hand: mockHand, score: 50}
let mockPlayerObjectHigherScore = {hand: mockHandHigherScore, score: 58}

let mockPlayerObjectList =  [mockPlayerObject, mockPlayerObjectHigherScore, mockPlayerObject]

let mockPlayerObjectWithWinner = {hand: mockHand, score: 50, winner: false}
let mockPlayerObjectHigherScoreWithWinner = {hand: mockHandHigherScore, score: 58, winner: true}


let mockPlayerObjectListWithWinner = [mockPlayerObjectWithWinner,
  mockPlayerObjectHigherScoreWithWinner, mockPlayerObjectWithWinner]

export {mockDealtCards, mockHand, mockPlayerObject, mockPlayerObjectWithWinner, mockPlayerObjectHigherScoreWithWinner, mockPlayerObjectList, mockPlayerObjectListWithWinner};
