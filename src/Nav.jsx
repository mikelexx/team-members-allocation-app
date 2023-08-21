import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav">
        <li  className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
        <li className="nav-item"><Link  to="/GroupedTeamMembers"className="nav-link">Teams</Link></li>
        </ul>
    </nav>
  )
}
