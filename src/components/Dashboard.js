import React, {Component} from 'react'
import {connect} from 'react-redux'
import QuestionsTab from './QuestionsTab'


class Dashboard extends Component {
  showTab= (e, tabName) => {
    e.preventDefault()
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent')
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none'
    }
    tablinks = document.getElementsByClassName('tablinks')
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    e.currentTarget.className += ' active';
  }
  render() {
    const {answeredQuestionIds,unAnsweredQuestionIds} = this.props

    return (
      <div className='dashboard-content'>
        <div className='tab'>
          <button className='tablinks active' onClick={(e)=>this.showTab(e, 'Unanswered Questions')}>Unanswered Questions</button>
          <button className='tablinks' onClick={(e)=>this.showTab(e, 'Answered Questions')}>Answered Questions</button>
        </div>

        <QuestionsTab id={'Unanswered Questions'} className={'tabcontent active'} questionIds={unAnsweredQuestionIds}/>
        <QuestionsTab id={'Answered Questions'} className={'tabcontent'} questionIds={answeredQuestionIds}/>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser, users, questions}) => {
  const answeredQuestionIds = Object.keys(users[authedUser].answers)
  const unAnsweredQuestionIds = Object.keys(questions).filter(id => !answeredQuestionIds.includes(id))
  return {
    answeredQuestionIds,
    unAnsweredQuestionIds,
  }
}


export default connect(mapStateToProps)(Dashboard)
