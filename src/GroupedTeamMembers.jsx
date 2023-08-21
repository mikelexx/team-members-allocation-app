import React from 'react'
import TeamBar from './TeamBar'

export default function GroupedTeamMembers({selectedTeam,employeesList}) {

const teamB =  {teamName:"Team B",members:[],collapsed:false}
const teamC =  {teamName:"Team C",members:[],collapsed:false}
const teamD =  {teamName:"Team D",members:[],collapsed:false}
const teamA = {teamName:"Team A",members:[],collapsed:false}
const teams = [teamA,teamB,teamC,teamD]
employeesList.forEach(employee => {
  const team = teams.find(team => team.teamName === employee.teamName);
  if (team) {
    team.members.push(employee);
  }
})

  return (
      teams.map(team=><TeamBar team={team}  key={team.teamName}/>)
  )
}
