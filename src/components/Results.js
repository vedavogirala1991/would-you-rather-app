import React,{Component} from 'react'

class Results extends Component {
  render() {
    const {answer,optionOne,optionTwo} = this.props

    const totalVotes = (optionOne && optionTwo) ? optionOne.votes.length + optionTwo.votes.length : 0

    const optionOneVotes = totalVotes!==0 ? optionOne.votes.length*100/totalVotes : 0

    const optionTwoVotes = totalVotes!==0 ? optionTwo.votes.length*100/totalVotes : 0

    return (
      <div className='question-results'>
        <span>Results</span>
        <div
          className={answer==='optionOne' ? 'question-option option-selected' : 'question-option'}
          id='optionOne'>
          <div className='user-vote' style={{display : answer==='optionOne' ? 'block' : 'none'}}>
            <p>your vote</p>
          </div>
          <p>Would you rather {optionOne.text}</p>
          <div className='vote-progress'>
            <div className='vote-ratio' style={{width : optionOneVotes+'%'}}></div>
          </div>
          <div className='votes-count'>
            <span>{optionOne.votes.length} out of {totalVotes}</span>
          </div>
        </div>
        <div
          className={answer==='optionTwo' ? 'question-option option-selected' : 'question-option'}
          id='optionTwo'>
          <div className='user-vote' style={{display : answer==='optionTwo' ? 'block' : 'none'}}>
            <p>your vote</p>
          </div>
          <p>Would you rather {optionTwo.text}</p>
          <div className='vote-progress'>
            <div className='vote-ratio' style={{width : optionTwoVotes+'%'}}></div>
          </div>
          <div className='votes-count'>
            <span>{optionTwo.votes.length} out of {totalVotes}</span>
          </div>
        </div>
      </div>)
  }
}

export default Results
