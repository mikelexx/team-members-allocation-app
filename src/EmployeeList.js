

import Employee from './Employee'
import './App.css'


export default function EmployeeList({employeesList,setEmployeesList,selectedTeam,setSelectedTeam}) {

  function handleSelectTeam(event){
        setSelectedTeam(event.target.value)
        

  }


  return (
      <div className='contents'>
          <div className='col-6'>
            <select onChange={handleSelectTeam} value={selectedTeam} className='form-select'>
        <option value="Team A">Team A</option>
        <option value="Team B">Team B</option>
        <option value="Team C">Team C</option>
        <option value="Team D">Team D</option>
      </select></div>
      <div className='card-collections'>
      
      {employeesList.map((employee)=>{
      return <Employee setEmployeesList={setEmployeesList} employeesList={employeesList} key={employee.id} selectedTeam= {selectedTeam} employee={employee}/>
    
    })}
    </div>
      </div>
    
  )
}
