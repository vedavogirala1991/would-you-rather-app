import React,{Component} from 'react'
import {connect} from 'react-redux'

class User extends Component {
  render () {
    const {name,avatarURL,questions,answers} = this.props.user

    const quesCount = questions.length
    const ansCount = Object.keys(answers).length

    const scoreCount = quesCount + ansCount

    return (
      <div className='user-leaderboard'>
        <div className='user-avatar'>
          <img
            src={avatarURL}
            alt={`Avatar of ${name}`}
            className='avatar'/>
        </div>
        <div className='user-details'>
          <h4>{name}</h4>
          <p>Answered questions {quesCount}</p>
          <p>Created questions {ansCount}</p>
        </div>
        <div className='user-score'>
          <p>Score</p>
          <p className='score-count'>{scoreCount}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({users},{id}) => {
  return {
    user : users[id],
  }
}

export default connect(mapStateToProps)(User)
