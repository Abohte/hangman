import { GUESS } from '../actions/hangman/guess'

const words = [ "convict", "dangling", "noose", "playing", "gallows", "rope", "prisoner"]

const initialState = {
  word: words[Math.floor(Math.random()*words.length)],
  guesses: []
}

export default function(state = initialState, action = {}) {
  switch(action.type) {
    case GUESS :
      const newState = {guesses: [...state.guesses, action.payload]}
      return {...state, ...newState}

    default :
      return state
  }
}
