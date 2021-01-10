import React,{Component} from 'react'
import {connect} from 'react-redux'
import winner from '../images/winner.png'

class User extends Component {
  render () {
    const {name,avatarURL,questions,answers} = this.props.user

    const quesCount = questions.length
    const ansCount = Object.keys(answers).length

    const scoreCount = quesCount + ansCount
    const rank = this.props.rank

    const rankClass = 'user-leaderboard '+ (rank===1 ? 'user-rank1' : (rank===2 ? 'user-rank2' : (rank===3? 'user-rank3' : 'user-rank' )))

    return (
      <div>
      {rank===1 &&
        <div>
          <img className='leaderboard-ranking' src={winner} alt='Winner'/>
        </div>
      }
      <div className={rankClass}>
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
          <div className='score-count'>
            <p>{scoreCount}</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = ({users},{id,rank}) => {
  return {
    user : users[id],
    rank,
  }
}

export default connect(mapStateToProps)(User)
