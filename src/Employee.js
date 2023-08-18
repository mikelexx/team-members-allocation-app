import React,{ useState } from 'react'
import femalePic from './female.jpeg'
import malePic from './male.jpeg'

export default function Employee({employeesList,setEmployeesList,selectedTeam, employee}) {
  const [teamMember,setTeamMember] = useState(employee)
  function handleEmployeeCardClick(){
    if(teamMember.teamName ===selectedTeam){ 
      const updatedEmployeesList = employeesList.map(employee=>{
        if(employee.id===teamMember.id){
          const newTeamMember = {...teamMember}
          newTeamMember.teamName = ''
          setTeamMember(newTeamMember)
          return newTeamMember
        }
        return employee
      })
      setEmployeesList(updatedEmployeesList)
      
      
      return
    }
    const updatedEmployeesList = employeesList.map(employee=>{
      if(employee.id===teamMember.id){
        const newTeamMember = {...teamMember}
        newTeamMember.teamName = selectedTeam
        setTeamMember(newTeamMember)
        return newTeamMember
      }
      return employee
    })
    setEmployeesList(updatedEmployeesList)

  }
  
  return (
    <div>
      
       <div onClick={handleEmployeeCardClick} className={(teamMember.teamName===selectedTeam?'card border-4 border border-black':'card')} style={{cursor:"pointer"}}>
      <img src={teamMember.gender==='Male'?malePic:femalePic} 
      width={60} height={200} className="card-img-top" alt="logo"/>
        <div className="card-body">
            <h5 className="card-title">Full Name: {teamMember.fullName}</h5>
            <p className="card-text"><strong>Designation: </strong>{teamMember.designation}</p>
            <p className="card-text">{teamMember.teamName}</p>
        </div>
</div>
    </div>
        
       
       
      
    
    
  )
}
