import React,{Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class QuestionsTab extends Component {
  render () {
    console.log('Questions : ',this.props.questionIds)
    const {questionIds} = this.props
    questionIds.map((item) =>(console.log(item)))
    return (
      <ul>
          {questionIds.map((id) =>(
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
      </ul>
    )
  }
}

const mapStateToProps = ({}, questionIds) => {
  return {
    questionIds,
  }
}
