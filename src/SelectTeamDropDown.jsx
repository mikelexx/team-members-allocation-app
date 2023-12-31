import React from 'react'

export default function SelectTeamDropDown({setSelectedTeam,selectedTeam}) {
    function handleSelectTeam(event){
        setSelectedTeam(event.target.value)
        

  }
  return (
      <div className='col-6'>
            <select onChange={handleSelectTeam} value={selectedTeam} className='form-select'>
        <option value="Team A">Team A</option>
        <option value="Team B">Team B</option>
        <option value="Team C">Team C</option>
        <option value="Team D">Team D</option>
      </select>
      </div>
  
  )
}
