import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'

class Question extends Component {
  render() {
    const question = this.props.question

    if(question === null){
      return <p> This Question doesn't exists </p>
    }

    const {
      name, avatar, timestamp, optionOne, optionTwo, votes
    } = question

    return (
      <table className='question-table' align='center'>
      <thead><tr className='author-name' colSpan={2} >
      <td>
        <span>{name} asks:</span></td>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td width='30%' align='right'>
      <img
        src={avatar}
        alt={`Avatar of ${name}`}
        className='avatar'
      />
      </td>
      <td className='question-peek'>
        <span>Would you rather</span>
        <p>..{optionOne.text.length>15 ? optionOne.text.substring(0,15) : optionOne.text}..</p>
        <button className='question-viewpoll'>View Poll</button>
      </td>
      </tr>
      </tbody>
      </table>
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
