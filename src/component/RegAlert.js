import React from "react";
import { Link } from "react-router-dom";
import RegAlertStyle from './RegAlert.module.css'
import { useNavigate } from "react-router-dom";

function RegAlert() {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/')
      }, 5000);
    return(
        <>
        <div className={RegAlertStyle.wrap}>
        <p>Now You Can Go To <Link to='/'>Home</Link> To Get Subscription </p> 
        </div>
        </>
    )
}

export default RegAlert