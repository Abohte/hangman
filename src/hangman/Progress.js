import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Progress extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

export default Progress
