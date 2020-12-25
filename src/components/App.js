import React, {Component} from 'react'
import {connect} from 'react-redux'
//React Redux loading bar
import LoadingBar from 'react-redux-loading'
//Action Creators
import {
  handleInitialData
} from '../actions/shared'
//UI components
import Dashboard from './Dashboard'


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <div>
        <LoadingBar/>
        {this.props.loading === true
          ? null
          : <Dashboard/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
