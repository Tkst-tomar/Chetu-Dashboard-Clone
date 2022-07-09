import React from 'react'
import AboutPage from './Sub Components/AboutPage'
import EditPersonal from './Sub Components/EditPersonal'
import ResetPassword from './Sub Components/ResetPassword'
import WelcomePage from './Sub Components/WelcomePage'
import TMDashboard from './Sub Components/TM Dashboard/TMDashboard'
import TraineeDashboard from './Sub Components/Trainee Dashboard/TraineeDashboard'
import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import changePasswordStore from '../../Redux/Store/ChangePasswordStore'
import TMFeedbackForm from './Sub Components/Feedback Forms/TMFeedbackForm'
import TraineeFeedbackForm from './Sub Components/Feedback Forms/TraineeFeedbackForm'

export default function RoutePage() {
  return (
    // <Provider store ={changePasswordStore}>

    <div>
      <Routes>
        <Route index path='welcome' element={<WelcomePage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='editdetail' element={<EditPersonal/>}/>
        <Route path='resetpass' element={<ResetPassword/>}/>
        <Route path='welcome/teamMemberDashboard' element={<TMDashboard/>}>
          {/* <Route path='/teamMember/:name'element={<TMFeedbackForm/>}/> */}
        </Route>
        <Route path='welcome/traineeDashboard' element={<TraineeDashboard/>}>
          {/* <Route path='/trainee/:name' element={<TraineeFeedbackForm/>}/> */}
        </Route>
      </Routes>
      
    </div>
    // </Provider>
  )
}
