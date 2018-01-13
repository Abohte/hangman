import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './NewGuess.css';
import guess from '../actions/hangman/guess'
import { connect } from 'react-redux'

const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i))

class NewGuess extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    guess: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  }

  render() {
    return(
      <div className="button-container">
        {alphabet.map((letter, i) => {
          const disabled = (this.props.disabled || this.props.guesses.includes(letter))
          return (
            <button className="alphabet-button" key={i} id={letter} disabled={disabled} onClick={() => this.props.guess(letter)}>
              {letter}
            </button>
          )
        })}
      </div>
    )
  }
}

const mapDispatchToProps = {
  guess
}

export default connect(null, mapDispatchToProps)(NewGuess)
