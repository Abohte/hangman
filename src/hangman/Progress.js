import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Progress.css'

class Progress extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    lost: PropTypes.bool
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
    const progress = this.showGuess(this.props.word, this.props.guesses)

    return(
      <div>
      <p className={this.props.lost? "lost" : null}>
      {this.props.lost? this.props.word : progress}
      </p>
      </div>
    )
  }
}

export default Progress
