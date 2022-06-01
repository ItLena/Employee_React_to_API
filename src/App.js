import React from "react-dom"
import EmployeeList from "./components/EmployeeList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employee from "./components/Employee";


function App() {
  return (
   <> 
   <Router>
     <Header/>
     <Footer/>
    < Routes>
       
        <Route path="/" exact element = {<Home/>} />
        <Route path="/employeelist" exact element = {<EmployeeList/>}/>
        <Route path="/employee/:id" exact element = {<Employee/>}/>
     
    </Routes>
   </Router>   
   </>
  );
}

export default App;
