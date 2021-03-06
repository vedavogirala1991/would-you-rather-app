import React, {Component,Fragment} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
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
import PageNotFound from './PageNotFound'
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
            <div className='nav-image-container'/>
            {this.props.loading === true
              ? null
              : <div className='page-container'>
                  <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/home' exact component={Dashboard}/>
                    <Route path='/question/:id' exact component={QuestionPage}/>
                    <Route path='/add' exact component={NewQuestion}/>
                    <Route path='/leaderboard' exact component={LeaderBoard}/>
                    <Route path='/404' component = {PageNotFound}/>
                    <Route component={Login} />
                  </Switch>
                  <div className='image-container'/>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ users,authedUser }) => {
  const loading = Object.keys(users).length === 0 ? true : false
  return {
    loading,
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
