import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";



export default function Employee(){

    const {id} = useParams();
    const [employee, setEmployee] = useState([]);
    
useEffect(()=>{
  async function getEmployee(id) {
    fetch('http://dummy.restapiexample.com/api/v1/employee/'+ id)
        .then(response => response.json())
        .then(data=>{setEmployee(data.data)              
        console.log("Employee by id:", data)});
    }
 getEmployee(id);
}, [id]);


    return(
        <div className="main-container">  
            
            <div className="content-box" key ={employee.id}>
                <div className="text-box">
                    <h1>{employee.employee_name}</h1>
                    <span><b>Age:</b> {employee.employee_age}</span>
                    <span><b>Salary:</b> {employee.employee_salary} SEK</span>                                   
                </div>
                <div className="img-box">
                    <img src={employee.profile_image} onError={(e)=>{e.target.onerror = null; e.target.src=require("../images/user.png")}}/>
                  
                </div>  
            </div>
        </div>
    )
}