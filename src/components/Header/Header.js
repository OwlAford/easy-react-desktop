import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <header>
    <h1>Blade Starter Kit</h1>
    <IndexLink to='/' activeClassName='route-active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route-active'>
      Counter
    </Link>
    {' · '}
    <Link to='/user' activeClassName='route-active'>
      User
    </Link>
  </header>
)

export default Header
