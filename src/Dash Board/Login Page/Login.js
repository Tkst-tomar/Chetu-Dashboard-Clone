import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import {function1,function2} from "../../Utils/Check";
import {ChangeStateProps} from "../../Redux/Middleware/ChangeStateMiddleware"
import {ChangeStateDispatch} from "../../Redux/Middleware/ChangeStateMiddleware"
import { connect, useDispatch } from 'react-redux';
import InsertBreadcrumbs from '../../Redux/Actions/BreadCrumbs';

let userId
let password

function Login(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
    // dispatch(InsertBreadcrumbs({name:"Login Page", path: "/"}))
  },[])
    let status1
    const navigate = useNavigate();
 
    
    userId = React.createRef();
    password = React.createRef();

    useEffect(()=>{
      props.auth ? navigate(props.nav) : navigate('/')
     
    },[props.auth])
    
    

  return (
      
    <div className='loginPage'>
        <div className="loginBox">
        <div className="userName Box">
        <label htmlFor="userName"><i className="fas fa-user-tie"></i></label>
        <input type="text" className="userName" ref={userId}/>
        </div>
        <div className="password Box">
        <label htmlFor="password"><i className="fas fa-lock"></i></label>
        <input type={props.type} className="password" ref={password}/><i className={props.class} onClick={props.changeState}></i>
        </div>
     
        <p className={props.pclass}>Login Failed</p>
        <div className="buttonBox">
        <button id='btn' className='loginButton' onClick={props.checkPass}>Login</button> 
        </div>
        </div>
    </div>
    
      
  )
}




export {userId , password}
export default connect(ChangeStateProps,ChangeStateDispatch)(Login)