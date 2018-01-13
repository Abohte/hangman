import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './NewGuess.css';

const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(97 + i))

class NewGuess extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  guess(letter) {
    console.log(letter)
  }

  render() {
    return(
      <div className="button-container">
        {alphabet.map((letter, i) => {
          return (
            <button className="alphabet-button" key={i} id={letter} disabled={this.props.guesses.includes(letter)} onClick={() => console.log(letter)}>
              {letter}
            </button>
          )
        })}
      </div>
    )
  }
}

export default NewGuess
