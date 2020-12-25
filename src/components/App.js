import React, {Component} from 'react'
import {connect} from 'react-redux'
//Action Creators
import {
  handleInitialData
} from '../actions/shared'


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <div>
        Hello! Welcome to Would you Rather App
      </div>
    );
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
