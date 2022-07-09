import React, { useEffect } from 'react'
import './WelcomePage.css'
import TMIMG from '../Assets/TMIcon.png'
import Trainee from '../Assets/TraineeIcon.png'
import { Link } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { ChangeStateDispatch, ChangeStateProps } from '../../../Redux/Middleware/ChangeStateMiddleware'
import InsertBreadcrumbs from '../../../Redux/Actions/BreadCrumbs'
function WelcomePage(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
    // dispatch(InsertBreadcrumbs({name: "Welcome Page", path:"/dashboard/welcome"}))
  },[])
  return (
    <div>
      <div className="WelcomePage">
          <Link to='teamMemberDashboard' className="TMBox">
            <img src={TMIMG} alt="TM's Icon" />
            <h2 className="BoxHeading">
              TEAM MEMBER
            </h2>
          </Link>
          <Link to='traineeDashboard' className="TraineeBox">
            <img src={Trainee} alt="Trainee Icon" />
            <h2 className="BoxHeading">
              TRAINEE
            </h2>
          </Link>
      </div>
    </div>
  )
}

export default connect(ChangeStateProps,ChangeStateDispatch)(WelcomePage)