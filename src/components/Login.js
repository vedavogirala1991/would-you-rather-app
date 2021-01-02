import React,{Component} from 'react'
import {connect} from 'react-redux'
import {handleSetAuthUser} from '../actions/authedUser'

class Login extends Component {
  state = {
    userId : ''
  }
  handleUserLogin = (e) => {
    e.preventDefault()
    //Dispatch the set user action
    this.props.dispatch(handleSetAuthUser(this.state.userId))
    this.props.history.push(`/home`)
  }
  handleSelect = (e) => {
    const userId = e.target.value
    this.setState(()=>({
      userId,
    }))
    console.log(userId)
  }
  render () {
    const {userIds,users} = this.props

    return (
      <div>
        <h3>Welcome to would you rather App</h3>
        <form onSubmit={this.handleUserLogin}>
          <p>Please sign in to continue</p>
          <p>Sign in</p>
          <p>
            <select value={this.state.userId} onChange={this.handleSelect}>
              <option value='' disabled defaultValue hidden>Select User</option>
              {userIds.map((id) => {
                return <option key={id} value={id}>{users[id].name}</option>
              })}
            </select>
          </p>
          <button type='submit' className='btn'>Sign in</button>
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
