// import logo from './logo.svg';
import './App.css';
import './Dash Board/Login Page/Login.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Login from './Dash Board/Login Page/Login';
import Dashboard from './Dash Board/Dashboard';
import { Route, Routes } from 'react-router-dom';
// import { Pro } from './Utils/Check';
import { connect, Provider, useDispatch } from 'react-redux';
import ChangeStateStore from './Redux/Store/ChangeStateStore';
import LoginRoute from './Dash Board/Login Page/LoginRoute';
import { useEffect } from 'react';
import { ChangeStateDispatch, ChangeStateProps } from './Redux/Middleware/ChangeStateMiddleware';
import InsertBreadcrumbs from './Redux/Actions/BreadCrumbs';

function App(props) {
  
  return (
   

    <div className="App">    
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='dashboard/*' element={<Dashboard/>}/>
      </Routes> 
  
    </div>
   
  );
}

export default connect(ChangeStateProps,ChangeStateDispatch)(App)
