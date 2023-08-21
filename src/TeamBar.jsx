import React, { useEffect, useState } from 'react'

export default function TeamBar({team}) {
 const [teamState,setTeamState] = useState(JSON.parse(localStorage.getItem(String(team.teamName)))||team)
 function handleTeamBarClick(){
  const newTeamState = {...teamState}
  newTeamState.collapsed = !newTeamState.collapsed
  setTeamState(newTeamState)    
 }
 useEffect(()=>{
  localStorage.setItem(teamState.teamName,JSON.stringify(teamState))
 },[teamState])

  return (
  <div onClick={handleTeamBarClick}className="container mt-4" >
    <div className="card">
      <div className="card-header" id="divHeading1">
        <h5 className="mb-0">
          <button  type="button" data-toggle="collapse" data-target="#divCollapse1">
           {team.teamName}
          </button>
        </h5>
      </div>

      <div id="divCollapse1" className={teamState.collapsed?"collapsed":"collapse"}>
        <div className="card-body " >
         {team.members.length===0?<p>no members</p>:team.members.map(member=><>
            <strong >FullName:{member.fullName}</strong>
            <p >Designation:{member.designation}</p>
         </>)}
        </div>
      </div>
  </div>
</div>   
  )}

