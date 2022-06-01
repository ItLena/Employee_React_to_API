import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import {FaCaretDown, FaCaretRight, FaCaretUp} from "react-icons/fa"

export default function EmployeeList(){

    const [persons, setPersons] = useState([]);
    const [filteredPersons, setFilteredPersons] = useState([]);

    const onSearchName = (e)=>{
        const filtred = persons.filter(x=> x.employee_name.toLowerCase().includes(e.target.value.toLowerCase())) 
            setFilteredPersons(filtred)
    }

    ///////////////////////////////////SORT///////////////////////////////////////

    const onSortAscName = (e) =>{ 
        setFilteredPersons([...filteredPersons].sort((a, b) =>a.employee_name > b.employee_name? 1:-1));
    }

    const onSortDescName = (e) =>{    
        const dataArray = [...filteredPersons]     
        const sorted = dataArray.sort((a, b) =>a.employee_name < b.employee_name? 1:-1);
        setFilteredPersons(sorted)        
    }

    const onSortAscAge = (e) =>{
        setFilteredPersons((filteredPersons) => filteredPersons.slice().sort((a, b) =>a.employee_age > b.employee_age? 1:-1));
    }
    const onSortDescAge = (e) =>{
        setFilteredPersons([...filteredPersons].slice().sort((a, b) =>a.employee_age < b.employee_age? 1:-1));
    }
    const onSortAscSalary = (e) =>{
        setFilteredPersons([...filteredPersons].slice().sort((a, b) =>a.employee_salary > b.employee_salary? 1:-1));
    }
    const onSortDescSalary = (e) =>{
        setFilteredPersons([...filteredPersons].slice().sort((a, b) =>a.employee_salary < b.employee_salary? 1:-1));
    }


    useEffect(() =>{         
            fetch('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => response.json())
            .then(data => {setPersons(data.data)
                    setFilteredPersons(data.data)
                })  
            },[])
        
    const employeeList = filteredPersons.map(item=>{
                return(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.employee_name}</td>
                        <td>{item.employee_age}</td>
                        <td>{item.employee_salary}</td>                    
                        <td><Link to={`/employee/${item.id}`}><FaCaretRight/></Link></td>
                    </tr>
                )
    });
        
    return(
        <div className="main-container">  
        <h1>Employee List</h1>
        <input className ="input-search" type="search" placeholder='Search after employee name' onChange={onSearchName} /> 
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>
                        Name
                        <FaCaretDown onClick={onSortAscName}/>
                        <FaCaretUp onClick={onSortDescName}/>
                    </th>
                    <th>
                        Age
                        <FaCaretDown onClick={onSortAscAge}/>
                        <FaCaretUp onClick={onSortDescAge}/>
                    </th>
                    <th>
                        Salary
                        <FaCaretDown onClick={onSortAscSalary}/>
                        <FaCaretUp onClick={onSortDescSalary}/>
                        
                    </th> 
                    <th>Show Details</th>                 
                </tr>
            </thead>
            <tbody>
               {employeeList}
            </tbody>
        </table>
       </div>
    )
}