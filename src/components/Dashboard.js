import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import QuestionsTab from './QuestionsTab'


class Dashboard extends Component {
  state = {
    activeTab : 'Unanswered Questions'
  }
  showTab= (e, tabName) => {
    e.preventDefault()
    this.setState(()=>({
      activeTab : tabName,
    }))
  }
  render() {
    const {answeredQuestionIds,unAnsweredQuestionIds,authedUser} = this.props
    const {activeTab} = this.state

    if(!authedUser)
    {
      return <Redirect
        to={{
          pathname: '/',
          state: { from: '/home' }
        }}
      />

      //return <Redirect to='/'/>
    }
    return (
      <div className='dashboard-content'>
        <div className='tab'>
          <button
            className={activeTab==='Unanswered Questions' ? 'tablinks active' : 'tablinks'}
            onClick={(e)=>this.showTab(e, 'Unanswered Questions')}>
              Unanswered Questions
          </button>
          <button
            className={activeTab==='Answered Questions' ? 'tablinks active' : 'tablinks'}
            onClick={(e)=>this.showTab(e, 'Answered Questions')}>
              Answered Questions
          </button>
        </div>

        <QuestionsTab
          className={activeTab==='Unanswered Questions' ? 'tabcontent active' : 'tabcontent'}
          questionIds={unAnsweredQuestionIds}/>
        <QuestionsTab
          className={activeTab==='Answered Questions' ? 'tabcontent active' : 'tabcontent'}
          questionIds={answeredQuestionIds}/>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser, users, questions}) => {
  const answeredQuestionIds = authedUser ? Object.keys(users[authedUser].answers) : null
  const unAnsweredQuestionIds = authedUser ? Object.keys(questions).filter(id => !answeredQuestionIds.includes(id)) : null
  return {
    answeredQuestionIds,
    unAnsweredQuestionIds,
    authedUser,
  }
}


export default connect(mapStateToProps)(Dashboard)
