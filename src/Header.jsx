import React from 'react'
import './App.css'
export default function Header({selectedTeam,teamCount}) {

  return (
    <div className='header-content'>
  <h1>Team Member Allocation</h1>
      <h3>{selectedTeam} has {teamCount} {teamCount===1?"member":"members"}</h3>
    </div>)
  
}
