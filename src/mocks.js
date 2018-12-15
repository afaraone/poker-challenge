let mockHand = [
  {rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}
]

let mockHandHigherScore = [
  {rank: 3, suit: 2}, {rank: 4, suit: 2}, {rank: 5, suit: 2}, {rank: 6, suit: 2}
]

let mockDealtCards = [mockHand, mockHandHigherScore, mockHand]

let mockPlayerObjectList =  [{hand: [{rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}], score: 50},
{hand: [{rank: 3, suit: 2}, {rank: 4, suit: 2}, {rank: 5, suit: 2}, {rank: 6, suit: 2}], score: 58},
{hand: [{rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}], score: 50}]

let mockPlayerObject = {hand: [{rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}], score: 50}

export {mockDealtCards, mockHand, mockPlayerObject, mockPlayerObjectList};
