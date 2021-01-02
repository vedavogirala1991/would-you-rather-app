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
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
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
                  <Route path='/' exact component={Dashboard}/>
                  <Route path='/question/:id' exact component={QuestionPage}/>
                  <Route path='/new' exact component={NewQuestion}/>
                </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
