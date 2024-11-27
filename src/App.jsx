/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import Login from "./components/Auth/Login";

import './index.css';
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
// import { getLocalStorage } from "./utils/LocalStorage";

function App() {

  const [user,setUser] =useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  const [userData,setUserData]=useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser','')
    
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }

  },[])

  const handleLogin =(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee= userData.find((e)=>email==e.email && password==e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))

      }
    }
    else{
      alert("Invalid Credentitals")
    }
  }

  
  


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user=='admin' ? <AdminDashboard changeUser={setUser} /> : (user=='employee' ? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData}/> :null)}
    </>
  );
}

export default App;