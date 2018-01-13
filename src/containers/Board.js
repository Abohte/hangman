import React, { PureComponent } from 'react'
import Game from '../hangman/Game'
import NewGuess from '../hangman/NewGuess'
import './Board.css'

const word = "jazz"
const guesses = ["a", "b", "b", "b", "b", "b"]

class Board extends PureComponent {

  render() {
    return(
      <div className="box">
        <Game word={word} guesses={guesses} />
        <NewGuess guesses={guesses} />
      </div>
    )
  }
}
// Todo: Win/lose

export default Board
