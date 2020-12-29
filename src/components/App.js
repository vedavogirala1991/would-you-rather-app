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
import QuestionPage from './QuestionPage'


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <div className='center'>
        <LoadingBar/>
        {this.props.loading === true
          ? null
          : <QuestionPage match={{params : {id : '8xf0y6ziyjabvozdd253nd'}}}/>
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
