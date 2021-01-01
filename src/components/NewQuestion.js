import React,{Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/shared'

class NewQuestion extends Component {
  state = {
    optionOne : '',
    optionTwo : '',
  }
  handleAddNewPoll = (e) => {
    e.preventDefault()
    const {dispatch,authedUser} = this.props
    const {optionOne,optionTwo} = this.state
    dispatch(handleSaveQuestion({authedUser,optionOne,optionTwo}))
    this.setState(()=>({
      optionOne : '',
      optionTwo : '',
    }))
  }
  handleOptionOneChange = (e) => {
    const optionOne = e.target.value
    this.setState(()=>({
      optionOne,
    }))
  }
  handleOptionTwoChange = (e) => {
    const optionTwo = e.target.value
    this.setState(()=>({
      optionTwo,
    }))
  }
  render () {
    const {optionOne,optionTwo}=this.state
    return (
      <div className='new-question'>
        <h3>Create New Question</h3>
        <form onSubmit={this.handleAddNewPoll}>
          <div className='question-contents'>
            <span>Complete the question:</span>
            <h4>Would you rather...</h4>
            <p>
              <input
                type='text'
                value={optionOne}
                onChange={this.handleOptionOneChange}
                placeholder='Enter Option One Text here'/>
            </p>
            <p>
              <input
                type='text'
                value={optionTwo}
                onChange={this.handleOptionTwoChange}
                placeholder='Enter Option Two Text here'/>
            </p>
            <button
              className='btn'
              type='submit'
              disabled={optionOne===''||optionTwo===''}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
