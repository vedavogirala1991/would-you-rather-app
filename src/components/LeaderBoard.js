import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import User from './User'

class LeaderBoard extends Component {
  render () {
    const {userIds,authedUser} = this.props
    if(!authedUser) {
      return <Redirect
        to={{
          pathname: '/',
          state: { from: '/leaderboard' }
        }}
      />
    }

    return (
      <div className='leaderboard-container'>
        <h3>Leader Board</h3>
        <ul className='leaderboard'>
          {userIds.map((id) => {
            return (<li key={id}>
             <User id={id}/>
            </li>)
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users,authedUser }) => {
  return {
    userIds : Object.keys(users)
      .sort((a,b) => {
        const user1score = users[a].questions.length + Object.keys(users[a].answers).length
        const user2score = users[b].questions.length + Object.keys(users[b].answers).length
        return user2score - user1score
      }),
    authedUser,
  }
}

export default connect(mapStateToProps)(LeaderBoard)
