import Question from './Question'
import {connect} from 'react-redux'

const QuestionsTab = (props) => {

  const {questionIds,className} = props

  if(questionIds.length===0) {
    let emptyText = 'You have answered all questions, add new question to answer.'
    if(this.props.id==='Answered Questions') {
      emptyText = 'You have not answered any question, start answering.'
    }

    return (
      <div className='empty-question'>
        <span>{emptyText}</span>
      </div>
    )
  }

  return (
    <div className={className}>
      <ul className='question'>
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

const mapStateToProps = ({questions}, {questionIds,id,className}) => {
  return {
    questionIds : questionIds ? Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp).filter((id) => questionIds.includes(id))
      : null,
    className,
    id,
  }
}

export default connect(mapStateToProps)(QuestionsTab)
