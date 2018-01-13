import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Gallow from './Gallow'
import Progress from './Progress'
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
  //
  // showGuess(word, guesses) {
  //   const blank = "_"
  //   const wordLetters = word.split("")
  //   return wordLetters.map(function(letter) {
  //     if (guesses.includes(letter)) {
  //       return letter
  //     } else {
  //       return blank
  //     }
  //   }).join(" ")
  // }
  //
  // isWinner(word, guesses) {
  //   if (!showGuess(word, guesses).includes("_")) return true
  // }
  //
  // // const readline = require("readline")
  // // const rl = readline.createInterface({input:process.stdin, output:process.stdout})
  //
  // checkDuplicateGuess(guesses, answer) {
  //   return guesses.includes(answer)
  // }
  //
  // next(word, guesses) {
  //   Object.freeze(guesses)
  //     if (wrongGuessCount(word, guesses) === 6) return console.log("You lost")
  //     else if (isWinner(word, guesses)) return console.log("You won!")
  //     else {
  //       rl.question("next letter? ", answer => {
  //           console.log("player wrote:", answer)
  //           var answerLetter = (answer.trim())[0]
  //           if (checkDuplicateGuess(guesses, answerLetter)) {
  //             console.log("You already guesses this letter. Try again.")
  //             next(word, guesses)
  //           }
  //           console.log(showGuess(word, [...guesses, answerLetter]))
  //           next(word, [...guesses, answerLetter])
  //       })
  //     }
  // }

  render() {
    return(
      <div className="game">
        <Gallow wrongGuesses={this.wrongGuessCount(this.props.word, this.props.guesses)} />
        <Progress word={this.props.word} guesses={this.props.guesses} />
      </div>
    )
  }
}

export default Game
