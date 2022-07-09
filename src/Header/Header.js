import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from './Assets/LogoChetu.png'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Link as MUILink, Typography } from '@mui/material';
import { connect, useDispatch, useSelector } from 'react-redux'
import { ChangeStateDispatch, ChangeStateProps } from '../Redux/Middleware/ChangeStateMiddleware'
import { Breadcrumbs } from '@mui/material'
import InsertBreadcrumbs from '../Redux/Actions/BreadCrumbs';
function Header(props) {
    // const {ID} = useParams()
    const location = useLocation()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // let history = useHistoy()
    const data = useSelector(state => state)
    let userName = 'XYZ'
    let [title, setTitle] = useState(`Welcome ${userName}`)
    let [style, setStyle] = useState(`none`)
    const [name, setName] = useState()
    let displayValue0 = React.createRef();
    let displayValue1 = React.createRef();
    let displayValue2 = React.createRef();
    let displayValue3 = React.createRef();
    let displayValue4 = React.createRef();
    let ListClassName = `list ${style}`
    useEffect(async () => {
        console.log("LOCATION DATA>>", location.pathname)
        console.log("HISTORY >>", navigate)
        // switch (location.pathname) {
        //     case "/":
        //         setName('Login Page')
        //     case '/dashboard/welcome':
        //         setName('Welcome Page')
        //     case "/dashboard/resetpass":
        //         setName('Change Password')
        //     case "/dashboard/editdetail":
        //         setName("Edit Personal Details")
        //     case "/dashboard/about":
        //         setName("About")
        //     case "/dashboard/about":
        //         setName("Trainee Dashboard")
        //     case "/dashboard/welcome/teamMemberDashboard":
        //         setName("TM Dashboard")
        //     default:
        //         break;
        // }
        if (location.pathname == '/') {
            // setName('Login Page')
            dispatch(InsertBreadcrumbs({ name: "Login Page", path: location.pathname }))
        } else if (location.pathname == '/dashboard/welcome') {
            dispatch(InsertBreadcrumbs({ name: "Welcome Page", path: location.pathname }))
        } else if (location.pathname == '/dashboard/resetpass') {
            dispatch(InsertBreadcrumbs({ name: "Change Password", path: location.pathname }))
        } else if (location.pathname == '/dashboard/editdetail') {
            dispatch(InsertBreadcrumbs({ name: "Edit Personal Details", path: location.pathname }))
        } else if (location.pathname == '/dashboard/about') {
            dispatch(InsertBreadcrumbs({ name: "About", path: location.pathname }))
        } else if (location.pathname == '/dashboard/welcome/teamMemberDashboard') {
            dispatch(InsertBreadcrumbs({ name: "TM Dashboard", path: location.pathname }))
        } else if (location.pathname == '/dashboard/welcome/traineeDashboard') {
            dispatch(InsertBreadcrumbs({ name: "Trainee Dashboard", path: location.pathname }))
        }
    }, [location.pathname])
    // useEffect(()=>{
    // },[location.pathname])
    // console.log("Redux Data >>", data.breabCrumbs)
    // console.log("NAME >>", name)
    const exportData0 = () => {
        setTitle(displayValue0.current.innerText)
        setStyle('none')
        ListClassName = `list ${style}`
    }

    const exportData1 = () => {
        setTitle(displayValue1.current.innerText)
        setStyle('none')
        ListClassName = `list ${style}`
    }
    const exportData2 = () => {
        setTitle(displayValue2.current.innerText)
        setStyle('none')
        ListClassName = `list ${style}`
    }
    const exportData3 = () => {
        setTitle(displayValue3.current.innerText)
        setStyle('none')
        ListClassName = `list ${style}`
    }
    const exportData4 = () => {

    }

    const ShowList = () => {
        if (ListClassName == `list none`) {
            setStyle('block')
        } else if (ListClassName == `list block`) {
            setStyle('none')
        }
        ListClassName = `list ${style}`
        console.log(ListClassName)
    }
    // console.log("Params Data >>", location)
    return (
        <div>
            <div className="TopBar">
                <div className="logo">
                    <img src={Logo} alt="LOGO" />
                </div>

                <div className="BreadCrumbs">
                    <Breadcrumbs aria-label="breadcrumb">
                        <MUILink underline="hover" color="inherit" href="/">
                            Login Page
                        </MUILink>
                        {data.breabCrumbs.map((x, index) => {
                            if (data.breabCrumbs.length != (index + 1)) {
                                return (
                                    <MUILink key={index} underline="hover" color="inherit" href={x.path}>
                                        {x.name}
                                    </MUILink>
                                )
                            } else {
                                return (
                                    <Typography sx={{ cursor: "pointer" }} color="text.primary">{x.name}</Typography>
                                )
                            }
                        })}
                    </Breadcrumbs>
                </div>
            </div>
            <div className="LowerBar">
                <div className="firstLB">
                    <i onClick={() => { navigate(-1) }} className="far fa-arrow-alt-circle-left"></i>
                    <div className="User">
                        <h1>
                            Welcome {userName}
                        </h1>
                    </div>
                </div>
                <div className="dropDown">
                    {/* <input type="text"  value={title} onClick={ShowList}/> */}
                    <p onClick={ShowList}>{title}</p><i className="fas fa-caret-down" onClick={ShowList}></i>
                    <ul className={ListClassName}>
                        <Link to='welcome' className="listItem" onClick={exportData0} ref={displayValue0}>Welcome {userName}</Link>
                        <Link to='about' className="listItem" onClick={exportData1} ref={displayValue1}>About {userName}</Link>
                        <Link to='editdetail' className="listItem" onClick={exportData3} ref={displayValue3}>Edit Personal Details</Link>
                        <Link to='resetpass' className="listItem" onClick={exportData2} ref={displayValue2}>Change Password</Link>
                        <Link to='/' className="listItem" onClick={props.authFalse} ref={displayValue4}>Logout</Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default connect(ChangeStateDispatch, ChangeStateProps)(Header)
