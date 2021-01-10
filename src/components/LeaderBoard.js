import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import User from './User'
import ranking from '../images/leaderboard-ranking.png'

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
    let rank = 0
    return (
      <div className='leaderboard-container'>
        <div className='leaderboard-header'>
          <img className='leaderboard-ranking' src={ranking} alt='Ranking'/>
          <h3>Leader Board</h3>
        </div>
        <ul className='leaderboard'>
          {userIds.map((id) => {
            rank++
            return (<li key={id}>
             <User id={id} rank={rank}/>
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
