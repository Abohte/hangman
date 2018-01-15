import React, { PureComponent } from 'react'
import Game from '../hangman/Game'
import './Board.css'
import { connect } from 'react-redux'

class Board extends PureComponent {

  render() {
    return(
      <div>
        <Game word={this.props.word} guesses={this.props.guesses} />
      </div>
    )
  }
}

const mapStateToProps = ({hangman}) => ({
    word: hangman.word,
    guesses: hangman.guesses
  })

export default connect(mapStateToProps)(Board)
