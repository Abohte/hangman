import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class NewGuess extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

export default NewGuess
