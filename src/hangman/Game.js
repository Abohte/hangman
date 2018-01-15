import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Gallow from './Gallow'
import Progress from './Progress'
import NewGuess from '../hangman/NewGuess'
import './Game.css'

class Game extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  wrongGuessCount(word, guesses) {
    return guesses.filter(
      guess => (word.indexOf(guess) === -1)
    ).length
  }

  hasWon(word, guesses) {
    const wordLetters = [...word]
    const unguessedLetters = wordLetters.filter(letter => !guesses.includes(letter))
    return unguessedLetters.length === 0
  }

  render() {
    const wrongGuessCount = this.wrongGuessCount(this.props.word, this.props.guesses)
    const lost = wrongGuessCount === 6
    const won = this.hasWon(this.props.word, this.props.guesses)

    return(
      <div className="box">
        <div className="game">
          <Gallow wrongGuesses={wrongGuessCount} won={won}/>
          <Progress word={this.props.word} guesses={this.props.guesses} lost={lost}/>
        </div>
          <NewGuess guesses={this.props.guesses} disabled={lost || won} />
      </div>
    )
  }
}

export default Game
