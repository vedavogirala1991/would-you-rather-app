import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
  render () {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/home' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' exact activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
        {this.props.username &&
          (<div className='user-nav'>
            <ul>
              <li>
                <span>Hello, {this.props.username}</span>
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
    )
  }
}

const mapStateToProps = ({ users,authedUser }) => {
  return {
    username: authedUser
      ? users[authedUser].name
      : null,
  }
}

export default connect(mapStateToProps)(Nav)
