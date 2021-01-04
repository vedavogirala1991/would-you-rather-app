import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
  render () {
    const {username,avatar} = this.props
    return (
      <div className='nav-bar'>
        <nav className='side-nav'>
          <ul>
            <li>
              <NavLink to='/home' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' exact activeClassName='active'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' exact activeClassName='active'>
                Leader Board
              </NavLink>
            </li>
            <li><a href='#about'>About</a></li>
          </ul>
        </nav>
        <nav className='nav'>
          {this.props.username &&
            (<div className='user-nav'>
              <ul>
                <li>
                  <span className='username'>Hello, {username}</span>
                  <img
                    src={avatar}
                    alt={`Avatar of ${username}`}
                    className='nav-avatar'/>
                </li>
                <li>
                  <NavLink to='/' exact activeClassName='active'>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>)
          }
        </nav>
      </div>
    )
  }
}

const mapStateToProps = ({ users,authedUser }) => {
  return {
    username: authedUser
      ? users[authedUser].name
      : null,
    avatar : authedUser
      ? users[authedUser].avatarURL
      : null,
  }
}

export default connect(mapStateToProps)(Nav)
