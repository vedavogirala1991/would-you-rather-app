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
          className='question-option'
          id='optionOne'
          style= {{border : answer==='optionOne' ? '1px solid #ccc' : 'none'}}>
          <p>Would you rather {optionOne.text}</p>
          <progress value={optionOneVotes} max={100}>{optionOneVotes}</progress>
        </div>
        <div
          className='question-option'
          id='optionTwo'
          style= {{border : answer==='optionTwo' ? '1px solid #ccc' : 'none'}}>
          <p>Would you rather {optionTwo.text}</p>
          <progress value={optionTwoVotes} max={100}>{optionTwoVotes}</progress>
        </div>
      </div>)
  }
}

export default Results
