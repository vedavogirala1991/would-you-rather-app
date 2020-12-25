import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'

class Question extends Component {
  render() {
    const question = this.props.question
    console.log('Question : ',question)
    if(question === null){
      return <p> This Question doesn't exists </p>
    }

    const {
      name, avatar, timestamp, optionOne, optionTwo, votes
    } = question

    return (
      <div>
      <span>{name} asks:</span>
      <img
        src={avatar}
        alt={`Avatar of ${name}`}
        className='avatar'
      />
      <div>
        <span>Would you rather</span>
        <p>..{optionOne.text.length>15 ? optionOne.text.substring(0,15) : optionOne.text}..</p>
      </div>
      </div>
    )
  }
}


const mapStateToProps = ({authedUser, users, questions} , {id}) => {
  const question = questions[id]
  return {
    authedUser,
    question : question ?
      formatQuestion(question,users[question.author],authedUser)
        : null
  }
}

export default connect(mapStateToProps)(Question)
