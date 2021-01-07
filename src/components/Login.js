import React,{Component} from 'react'
import {connect} from 'react-redux'

import {handleSetAuthUser} from '../actions/authedUser'

class Login extends Component {
  componentDidMount = () => {
    this.props.dispatch(handleSetAuthUser(''))
  }

  state = {
    userId : '',
  }
  handleUserLogin = (e) => {
    e.preventDefault()
    //Dispatch the set user action
    this.props.dispatch(handleSetAuthUser(this.state.userId))
    if(this.props.history.location.state)
    {
      const from = this.props.history.location.state.from
      this.props.history.push(from)
    }
    else {
      this.props.history.push(`/home`)
    }

  }
  handleSelect = (e) => {
    const userId = e.target.value
    this.setState(()=>({
      userId,
    }))
  }
  render () {
    const {userIds,users} = this.props
    const from = this.props.history.location.state
    const displayError = from!=null && this.state.userId===''

    return (
      <div className='user-login'>
        <h3>Welcome to would you rather App</h3>
        <form onSubmit={this.handleUserLogin}>
          <p>Please sign in to continue</p>
          <p>Sign in</p>
          <p>
            <select
              style={{border : displayError === true ? '1px solid red' : '1px solid #CCC'}}
              value={this.state.userId}
              onChange={this.handleSelect}>
                <option value='' disabled defaultValue hidden>Select User</option>
                {userIds.map((id) => {
                  return <option key={id} value={id}>{users[id].name}</option>
                })}
            </select>
          </p>
          <span className='signin-error' style={{display : displayError === true ? 'block' : 'none'}}>Please select the user and sign in</span>
          <button type='submit' className='btn' disabled= {this.state.userId===''}>Sign in</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    userIds : Object.keys(users),
    users,
  }
}

export default connect(mapStateToProps)(Login)
