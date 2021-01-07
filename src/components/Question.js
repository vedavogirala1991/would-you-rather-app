import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import {withRouter} from 'react-router-dom'

class Question extends Component {
  viewPoll = (e,id) => {
    e.preventDefault()
    this.props.history.push(`/question/${id}`)
  }

  render() {
    const {question} = this.props

    if(question === null){
      return <p> This Question doesn't exists </p>
    }

    const { name, avatar, optionOne ,id} = question

    return (
      <div className='question-details'>
        <div className='author-name'>
          <span>{name} asks:</span>
        </div>
        <div className='question-avatar'>
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
          />
        </div>
        <div className='question-peek'>
          <span>Would you rather</span>
          <p>..{optionOne.text.length>15 ? optionOne.text.substring(0,15) : optionOne.text}..</p>
        </div>
        <div className='question-viewpoll'>
          <button
            className='view-poll-btn'
            onClick={(e)=>this.viewPoll(e,id)}>
            View Poll
          </button>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({authedUser, users, questions} , props) => {
  const {id} = props
  const question = questions[id]

  return {
    authedUser,
    question : question
      ? formatQuestion(question,users,authedUser)
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Question))
