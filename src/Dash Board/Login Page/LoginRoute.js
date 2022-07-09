import React from 'react'
import { Provider } from 'react-redux'
import ChangeStateStore from '../../Redux/Store/ChangeStateStore'
import Login from './Login'

function LoginRoute() {
  return (
    <div>
        <Provider store={ChangeStateStore}>
      <Login/>

        </Provider>
    </div>
  )
}

export default LoginRoute
