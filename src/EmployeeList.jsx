
import Employee from './Employee'
import './App.css'
import SelectTeamDropDown from './SelectTeamDropDown'
export default function EmployeeList({employeesList,setEmployeesList,selectedTeam,setSelectedTeam}) {
  return (
      <div className='contents'>
          <SelectTeamDropDown setSelectedTeam={setSelectedTeam} selectedTeam={selectedTeam}/>
      <div className='card-collections'>
      
      {employeesList.map((employee)=>{
      return <Employee setEmployeesList={setEmployeesList} employeesList={employeesList} key={employee.id} selectedTeam= {selectedTeam} employee={employee}/>
    
    })}
    </div>
      </div>
    
  )
}
