import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const images = [
  require('../images/hangman/0.jpg'),
  require('../images/hangman/1.jpg'),
  require('../images/hangman/2.jpg'),
  require('../images/hangman/3.jpg')
]

class Gallow extends PureComponent {
  static propTypes = {
    wrongGuesses: PropTypes.number.isRequired
  }

  render() {
    return(
      <div>
      <img
        src={images[this.props.wrongGuesses]}
        className="gallow"
        alt={`${this.props.wrongGuesses} incorrect`}
      />
      </div>
    )
  }
}

export default Gallow
