import React,{Component} from 'react'
import {connect} from 'react-redux'
import User from './User'

class LeaderBoard extends Component {
  render () {
    const {userIds} = this.props

    return (
      <div>
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

const mapStateToProps = ({ users }) => {
  return {
    userIds : Object.keys(users),
  }
}

export default connect(mapStateToProps)(LeaderBoard)
