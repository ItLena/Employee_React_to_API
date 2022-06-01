import React from "react";
import {Link} from "react-router-dom"

export default function Header(){
    return(
        <nav>
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/employeeList">Employees</Link>
        </nav>
    )
}