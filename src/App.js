import Content from "./Content";
import EmployeeList from "./EmployeeList";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { employeeList } from './EmployeesData'
import Header from "./Header";


function App() {
  const [selectedTeam,setSelectedTeam] =useState(localStorage.getItem("selectedTeam")||"Team B")
  const [employeesList,setEmployeesList] = useState(JSON.parse(localStorage.getItem("teamMembers"))||employeeList)
  const teamCount = employeesList.filter(employee=>employee.teamName===selectedTeam).length
  useEffect(()=>{
    localStorage.setItem("teamMembers",JSON.stringify(employeesList))
  },[employeesList])
  useEffect(()=>{
    localStorage.setItem("selectedTeam",selectedTeam)
  },[selectedTeam])
  return (
   <>
   <Header selectedTeam={selectedTeam} teamCount={teamCount}/>
   <EmployeeList setEmployeesList={setEmployeesList} employeesList = {employeesList} selectedTeam ={selectedTeam} setSelectedTeam={setSelectedTeam}/>
   <Content/>
   <Footer/>
   </>
  );
}

export default App;
