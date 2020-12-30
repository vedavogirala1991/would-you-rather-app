import React,{Component} from 'react'
import {connect} from 'react-redux'
import {formatQuestion} from '../utils/helpers'
import {handleSaveAnswer} from '../actions/questions'
import Poll from './Poll'
import Results from './Results'

class QuestionPage extends Component {
  state = {
    answer : '',
    hasAnswered : this.props.question.hasAnswered,
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

    const {dispatch,id,authedUser} = this.props
    const {answer} = this.state
    dispatch(handleSaveAnswer({authedUser,id,answer}))
    this.setState(()=>({
      answer,
      hasAnswered : true
    }))
  }

  render () {
    const { name, avatar, optionOne, optionTwo, answeredOption, id} = this.props.question
    const answer = answeredOption ? answeredOption : this.state.answer

    console.log('Answer Render : ',answer)

    return (
      <form onSubmit={this.handleSaveAnswer}>
        <table className='question-table' align='center'>
          <thead className='author-name'>
            <tr>
              <td colSpan={2}>
                {this.state.hasAnswered ===true
                  ? <span>Asked by {name}</span>
                  : <span>{name} asks:</span>
                }
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
                {this.state.hasAnswered === true
                  ? <Results
                      answer={answer}
                      optionOne={optionOne}
                      optionTwo={optionTwo}/>
                  : <Poll
                      answer={answer}
                      handleChange={this.handleChange}
                      optionOne={optionOne}
                      optionTwo={optionTwo}/>
                  }
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
    question : formatQuestion(question,users,authedUser),
    id,
  }
}

export default connect(mapStateToProps)(QuestionPage)
