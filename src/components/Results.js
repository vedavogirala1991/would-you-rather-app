import React,{Component} from 'react'

class Results extends Component {
  render() {
    const {answer,optionOne,optionTwo} = this.props

    const totalVotes = optionOne.votes.length + optionTwo.votes.length

    const optionOneVotes = optionOne.votes.length*100/totalVotes

    const optionTwoVotes = optionTwo.votes.length*100/totalVotes

    return (
      <div>
        <span>Results</span>
        <div
          id='optionOne'
          style= {{border : answer==='optionOne' ? '1px solid #ccc' : 'none'}}>
          <p>Would you rather {optionOne.text}</p>
          <progress value={optionOneVotes} max={100}>{optionOneVotes}</progress>
        </div>
        <div
          id='optionTwo'
          style= {{border : answer==='optionTwo' ? '1px solid #ccc' : 'none'}}>
          <p>Would you rather {optionTwo.text}</p>
          <progress value={optionTwoVotes} max={100}>{optionTwoVotes}</progress>
        </div>
      </div>)
  }
}

export default Results
