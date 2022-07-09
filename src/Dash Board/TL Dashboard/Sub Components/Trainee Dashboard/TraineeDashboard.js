import React, { useEffect } from 'react'
import './TraineeDashboard.css'
import TRM from './Assets/TRM.jpg'
import TRL from './Assets/TRL.png'
import { connect, useDispatch } from 'react-redux'
import { ChangeStateDispatch, ChangeStateProps } from '../../../../Redux/Middleware/ChangeStateMiddleware'
import InsertBreadcrumbs from '../../../../Redux/Actions/BreadCrumbs'
export default connect(ChangeStateDispatch,ChangeStateProps)( function TraineeDashboard(props) {
  const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(InsertBreadcrumbs({ name: "Trainee Dashboard", path: "/dashboard/welcome/traineeDashboard" }))
    }, [])
  return (
    <div className='TRDashboard'>
      <div className="TRBox">
        <img src={TRM} alt="" />
        <h2>TRAINEE 1</h2>
      </div>
      <div className="TRBox">
        <img src={TRL} alt="" />
        <h2>TRAINEE 2</h2>

      </div>
      <div className="TRBox">
        <img src={TRL} alt="" />
        <h2>TRAINEE 3</h2>

      </div>
      <div className="TRBox">
        <img src={TRM} alt="" />
        <h2>TRAINEE 4</h2>

      </div>
      <div className="TRBox">
        <img src={TRL} alt="" />
        <h2>TRAINEE 5</h2>

      </div>
      <div className="TRBox">
        <img src={TRM} alt="" />
        <h2>TRAINEE 6</h2>

      </div>
      <div className="TRBox">
        <img src={TRM} alt="" />
        <h2>TRAINEE 7</h2>

      </div>
    </div>
  )
}
)