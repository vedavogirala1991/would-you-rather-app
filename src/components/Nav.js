import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

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
      </nav>
    )
  }
}

export default Nav
