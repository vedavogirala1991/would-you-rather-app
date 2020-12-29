import React,{Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import {handleSaveAnswer} from '../actions/questions'

class QuestionPage extends Component {
  state = {
    answer : '',
  }
  handleChange = (e) => {
    const answer = e.target.value
    console.log('A : ',answer)
    this.setState(()=>({
      answer,
    }))
  }
  handleSaveAnswer = (e) => {
    e.preventDefault()
    console.log('Inside handle save answer')
    const {dispatch,id,authedUser} = this.props
    const {answer} = this.state
    dispatch(handleSaveAnswer({authedUser,id,answer}))
  }
  render () {
    console.log('props : ',this.props)
    const { name, avatar, optionOne, optionTwo, id} = this.props.question
    const {answer} = this.state
    return (
      <form onSubmit={this.handleSaveAnswer}>
        <table className='question-table' align='center'>
          <thead className='author-name'>
            <tr>
              <td colSpan={2}>
                <span>{name} asks:</span>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width='40%' align='right'>
                <img
                  src={avatar}
                  alt={`Avatar of ${name}`}
                  className='avatar'
                />
              </td>
              <td className='question-peek'>
                <span>Would you rather</span>
                <div onChange={this.handleChange}>
                  <input type="radio" value={'optionOne'} name='options'/> {optionOne.text}
                  <input type="radio" value={'optionTwo'} name='options'/> {optionTwo.text}
                </div>
                <button
                  className='btn'
                  type='submit'
                  disabled={answer===''}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    )
  }
}

const mapStateToProps = ({authedUser,questions,users},props) => {
  const {id} = props.match.params
  const question = questions[id]
  return {
    authedUser,
    question : formatQuestion(question,users[question.author],authedUser),
    id,
  }
}

export default connect(mapStateToProps)(QuestionPage)
