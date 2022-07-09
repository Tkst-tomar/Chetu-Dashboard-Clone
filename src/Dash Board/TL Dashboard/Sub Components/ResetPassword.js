import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import InsertBreadcrumbs from '../../../Redux/Actions/BreadCrumbs'
import changePassword from '../../../Redux/Actions/ChangePass'
import { ChangeStateDispatch, ChangeStateProps } from '../../../Redux/Middleware/ChangeStateMiddleware'
import './ResetPassword.css'
let userNameRes
let newPass
let conPass
function ResetPassword(props) {
  console.log(props)

  const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(InsertBreadcrumbs({ name: "Change Password", path: "/dashboard/resetpass" }))
    }, [])
 
  newPass = React.createRef()
  conPass = React.createRef()
  userNameRes = React.createRef()
 


  return (
    <div className="Reset">

    <div className='RPage'>
      <div className="D-flex">

      <div className="RColumn">
        <div className="RRow1">
          <label htmlFor="RUserName">Enter User Name</label>
        </div>
        <div className="RRow2">
          <label htmlFor="RPassword">Enter New Password</label>
        </div>
        <div className="RRow3">
          <label htmlFor="RCPassword">Confirm New Password</label>
        </div>
      </div>
      <div className="RColumn">
        <div className="RRow1">
          <input type="text" className="RUserName" ref={userNameRes}/>
        </div>
        <div className="RRow2">
          <label htmlFor=""></label>
          <input type="text" className="RPassword" ref={newPass}/>
        </div>
        <div className="RRow3">
          <label htmlFor=""></label>
          <input type="text" className="RCPassword" ref={conPass}/>
        </div>
      </div>

      </div>
      <input className={props.rclass} value={props.msg} disabled/>
      <button className="RPButton" onClick={props.changepass}>Reset Password</button>
    </div>
    </div>
  )
}

export {newPass,conPass,userNameRes}
export default connect(ChangeStateProps, ChangeStateDispatch)(ResetPassword)