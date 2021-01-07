import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import wyr from '../images/would-you-rather.jpg'

class Nav extends Component {
  render () {
    const {username,avatar} = this.props
    return (
      <div className='nav-bar'>
        <nav className='side-nav'>
          <ul>
            <li className='image-wrapper'>
              <img className='wyr' src={wyr} alt='WYR App'/>
            </li>
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
          </ul>
        </nav>
        <h2 className='logo-title'>Would You Rather ...?</h2>
        <nav className='nav'>
          {this.props.username &&
            (<div className='user-nav'>
              <ul>
                <li className='user-actions'>
                  <span className='username'>Hello, {username}</span>
                  <img
                    src={avatar}
                    alt={`Avatar of ${username}`}
                    className='nav-avatar'/>
                  <NavLink className='user-logout' to='/' exact activeClassName='active'>
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
