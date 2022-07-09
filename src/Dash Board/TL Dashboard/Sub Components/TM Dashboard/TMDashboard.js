import React, { useEffect } from 'react'
import './TMDashboard.css'
import MImg from './Assets/TMM.png'
import FImg from './Assets/TMF.png'
import { connect, useDispatch } from 'react-redux'
import { ChangeStateDispatch, ChangeStateProps } from '../../../../Redux/Middleware/ChangeStateMiddleware'
import InsertBreadcrumbs from '../../../../Redux/Actions/BreadCrumbs'

export default connect(ChangeStateDispatch,ChangeStateProps)(function TMDashboard(props) {
  const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(InsertBreadcrumbs({ name: "TM Dashboard", path: "/dashboard/welcome/teamMemberDashboard" }))
    }, [])
  return (
    <div className='TMDashboard'>
      <div className="TMBox">
        <img src={FImg} alt="" />
        <h2>TEAM MEMBER 1</h2>
      </div>
      <div className="TMBox">
        <img src={MImg} alt="" />
        <h2>TEAM MEMBER 2</h2>

      </div>
      <div className="TMBox">
        <img src={MImg} alt="" />
        <h2>TEAM MEMBER 3</h2>

      </div>
      <div className="TMBox">
        <img src={FImg} alt="" />
        <h2>TEAM MEMBER 4</h2>

      </div>
      <div className="TMBox">
        <img src={MImg} alt="" />
        <h2>TEAM MEMBER 5</h2>

      </div>
      
    </div>
  )
}
)