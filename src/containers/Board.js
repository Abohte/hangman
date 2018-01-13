import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Game from '../hangman/Game'
import NewGuess from '../hangman/NewGuess'

const word = "jazz"
const guesses = []

class Board extends PureComponent {

  render() {
    return(
      <div>
        <Game word={word} guesses={guesses} />
        <NewGuess guesses={guesses} />
      </div>
    )
  }
}
// Todo: Win/lose

export default Board
