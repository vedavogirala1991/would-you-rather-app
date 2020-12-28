import React,{Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class QuestionsTab extends Component {
  render () {
    const {id,className,questionIds} = this.props
    return (
      <div id={id} className={className}>
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

const mapStateToProps = ({questions}, {questionIds,id,className}) => {
  return {
    id,
    className,
    questionIds : Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp).filter(id => questionIds.includes(id))
  }
}

export default connect(mapStateToProps)(QuestionsTab)
