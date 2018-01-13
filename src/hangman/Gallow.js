import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Gallow.css';

const images = [
  require('../images/0.png'),
  require('../images/1.png'),
  require('../images/2.png'),
  require('../images/3.png'),
  require('../images/4.png'),
  require('../images/5.png'),
  require('../images/6.png'),
  require('../images/7.png')
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
