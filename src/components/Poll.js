import React,{Component} from 'react'

class Poll extends Component {
  render() {
    const {answer,handleChange,optionOne,optionTwo} = this.props
    return (
      <div className='question-poll'>
        <span>Would you rather</span>
        <div className='question-choices' onChange={handleChange}>
          <p><input type="radio" value={'optionOne'} name='options'/> {optionOne.text}</p>
          <p><input type="radio" value={'optionTwo'} name='options'/> {optionTwo.text}</p>
        </div>
        <button
          className='submit-poll-btn'
          type='submit'
          disabled={answer===''}>
          Submit
        </button>
      </div>)
  }
}

export default Poll
