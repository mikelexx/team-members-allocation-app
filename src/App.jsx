import EmployeeList from "./EmployeeList";
import { useEffect, useState } from "react";
import {employeesData } from './EmployeesData'
import Header from "./Header";
import { Route,Routes } from "react-router-dom";
import GroupedTeamMembers from "./GroupedTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";
function App() {
  const [selectedTeam,setSelectedTeam] =useState(localStorage.getItem("selectedTeam")||"Team B")
  const [employeesList,setEmployeesList] = useState(JSON.parse(localStorage.getItem("teamMembers"))||employeesData)
  const teamCount = employeesList.filter(employee=>employee.teamName===selectedTeam).length
  useEffect(()=>{
    localStorage.setItem("teamMembers",JSON.stringify(employeesList))
  },[employeesList])
  useEffect(()=>{
    localStorage.setItem("selectedTeam",selectedTeam)
  },[selectedTeam])
  return (
   <>
   <Nav/>
   <Header selectedTeam={selectedTeam} teamCount={teamCount}/>
   <Routes >
      <Route path="/" element={<EmployeeList setEmployeesList={setEmployeesList}employeesList = {employeesList} selectedTeam ={selectedTeam} setSelectedTeam={setSelectedTeam}/>}/>
      <Route path="/GroupedTeamMembers"element={<GroupedTeamMembers selectedTeam={selectedTeam} employeesList={employeesList}/>}/>
      <Route path="*" element={<NotFound/>}/>
   </Routes>
   </>
  );
}

export default App;
