import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Progress.css'

class Progress extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  showGuess(word, guesses) {
    const blank = "_"
    const wordLetters = word.split("")
    return wordLetters.map(function(letter) {
      if (guesses.includes(letter)) {
        return letter
      } else {
        return blank
      }
    }).join(" ")
  }

  render() {
    return(
      <div>
      <p>{this.showGuess(this.props.word, this.props.guesses)}</p>
      </div>
    )
  }
}

export default Progress
