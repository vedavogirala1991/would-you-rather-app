import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
  render() {
    console.log('Questions : ',this.props.questionIds)
    const {questionIds} = this.props
    questionIds.map((item) =>(console.log(item)))
    return (
      <div>
        <ul>
            {questionIds.map((id) =>(
              <li key={id}>
                <Question id={id}/>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser, users, questions}) => {
  //const answeredQuestionIds = Object.keys(users[authedUser].answers)
  //const unansweredQuestionIds = Object.keys(questions).filter(id => !answeredQuestionIds.includes(id));
  return {
    //answeredQuestionIds,
    //answeredQuestionIds,
    questionIds : Object.keys(questions),
  }
}


export default connect(mapStateToProps)(Dashboard)
