import React, {Component,Fragment} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {connect} from 'react-redux'
//React Redux loading bar
import LoadingBar from 'react-redux-loading'
//Action Creators
import {
  handleInitialData
} from '../actions/shared'
//UI components
import Dashboard from './Dashboard'
import Login from './Login'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div className='container'>
            <Nav/>
            {this.props.loading === true
              ? null
              : <div className='center'>
                  <Route path='/' exact component={Login}/>
                  <Route path='/home' exact component={Dashboard}/>
                  <Route path='/question/:id' exact component={QuestionPage}/>
                  <Route path='/new' exact component={NewQuestion}/>
                  <Route path='/leaderboard' exact component={LeaderBoard}/>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ users,authedUser }) => {
  return {
    loading: users === null,
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
