import React from 'react'

export default function Header({selectedTeam,teamCount}) {

  return (
    <div>
      <h1>{selectedTeam} has {teamCount} members</h1>
    </div>
  )
}
