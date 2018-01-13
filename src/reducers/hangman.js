import { GUESS } from '../actions/hangman/guess'

const initialState = {
  word: "jazz",
  guesses: []
}

export default function(state = initialState, action = {}) {
  console.log(state)
  // based on the action type we will return a new state
  switch(action.type) {
    // some actions include a payload that we can use to update the state
    // in this case the payload will contain a new recipe
    case GUESS :
      const newState = {guesses: [...state.guesses, action.payload]}
      console.log(newState)
      console.log({...state, ...newState})
      return {...state, ...newState}


    default :
      return state
  }
}
