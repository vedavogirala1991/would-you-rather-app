import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {formatQuestion} from '../utils/helpers'
import {handleSaveAnswer} from '../actions/shared'
import Poll from './Poll'
import Results from './Results'

class QuestionPage extends Component {
  state = {
    answer : '',
    hasAnswered : this.props.question ? this.props.question.hasAnswered : false,
  }
  handleChange = (e) => {
    const answer = e.target.value

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
    if(!this.props.authedUser)
    {
      return <Redirect
        to={{
          pathname: '/',
          state: { from: this.props.location.pathname }
        }}
      />
    }
    if(!this.props.isValidQuestion) {
      return <Redirect to='/404' />
    }

    const { name, avatar, optionOne, optionTwo, answeredOption} = this.props.question
    const answer = answeredOption ? answeredOption : this.state.answer

    return (
      <div className='question-page'>
        <form className='question-page-details' onSubmit={this.handleSaveAnswer}>
          <div className='ques-page-author'>
            {this.state.hasAnswered ===true
              ? <span>Asked by {name}</span>
              : <span>{name} asks:</span>
            }
          </div>
          <div className='ques-page-avatar'>
            <img
              src={avatar}
              alt={`Avatar of ${name}`}
              className='avatar'
            />
          </div>
          <div className='ques-page-peek'>
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
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser,questions,users},props) => {
  const {id} = props.match.params
  const isValidQuestion = questions[id] ? true : false
  const question = isValidQuestion ? questions[id] : null
  return {
    authedUser,
    isValidQuestion,
    question : authedUser && isValidQuestion ? formatQuestion(question,users,authedUser) : null,
    id,
  }
}

export default connect(mapStateToProps)(QuestionPage)
