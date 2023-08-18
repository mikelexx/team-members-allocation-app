import Content from "./Content";
import EmployeeList from "./EmployeeList";
import Footer from "./Footer";
import { useState } from "react";
import { employeeList } from './EmployeesData'
import Header from "./Header";



function App() {
  const [selectedTeam,setSelectedTeam] =useState("Team B")
  const [employeesList,setEmployeesList] = useState(employeeList)
  const teamCount = employeesList.filter(employee=>employee.teamName===selectedTeam).length


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
