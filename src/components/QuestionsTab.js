import React,{Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class QuestionsTab extends Component {
  render () {
    const {questionIds,className} = this.props
    return (
      <div className={className}>
        <ul>
            {questionIds &&
              questionIds.map((id) =>(
              <li key={id}>
                <Question id={id}/>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({questions}, {questionIds,id,className}) => {
  return {
    questionIds : questionIds ? Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp).filter((id) => questionIds.includes(id))
      : null,
    className,
  }
}

export default connect(mapStateToProps)(QuestionsTab)
