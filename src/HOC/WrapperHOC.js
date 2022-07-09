import React, { useState } from "react"
import './Header.css'
import Logo from './Assets/LogoChetu.png'

function WrapperHOC(NewComponent)
{
    let userName = 'XYZ'
    let [title,setTitle] = useState(`Welcome ${userName}`)
    let [style,setStyle] = useState(`none`)
    let displayValue0 = React.createRef();
    let displayValue1 = React.createRef();
    let displayValue2 = React.createRef();
    let displayValue3 = React.createRef();
    let displayValue4 = React.createRef();
    let ListClassName = `list ${style}`
   
    const exportData0 = ()=>{
        setTitle(displayValue0.current.innerText)
        setStyle('none')
        ListClassName = `list ${style}`
    }

    const exportData1 = ()=>{
        setTitle(displayValue1.current.innerText)
        setStyle('none')
        ListClassName = `list ${style}`
    }
    const exportData2 = ()=>{
        setTitle(displayValue2.current.innerText)
        setStyle('none')
        ListClassName = `list ${style}`
    }
    const exportData3 = ()=>{
        setTitle(displayValue3.current.innerText)
        setStyle('none')
        ListClassName = `list ${style}`
    }
    const exportData4 = ()=>{
        setTitle(displayValue4.current.innerText)
        setStyle('none')
        ListClassName = `list ${style}`
    }

    const ShowList = ()=>{
        if(ListClassName == `list none`){
            setStyle('block')
        }else if(ListClassName == `list block`){
            setStyle('none')
        }
        ListClassName = `list ${style}`
        console.log(ListClassName)
    }
     return function BaseClass(){
            return (
                <React.Fragment>
                <header>
                <div className="TopBar">
                <div className="logo">
                    <img src={Logo} alt="LOGO" />
                </div>

                <div className="BreadCrumbs">
                    <p>This is Bread Crumbs</p>
                </div>
            </div>
            <div className="LowerBar">
                <div className="firstLB">
                <i className="far fa-arrow-alt-circle-left"></i>
                <div className="User">
                    <h1>
                        Welcome {userName}
                    </h1>
                </div>
                </div>
                <div className="dropDown">
                    <p onClick={ShowList}>{title}</p><i className="fas fa-caret-down" onClick={ShowList}></i>
                    <ul className={ListClassName}>
                        <li className="listItem" onClick={exportData0} ref={displayValue0}>Welcome {userName}</li>
                        <li className="listItem" onClick={exportData1} ref={displayValue1}>About {userName}</li>
                        <li className="listItem" onClick={exportData3} ref={displayValue3}>Edit Personal Details</li>
                        <li className="listItem" onClick={exportData2} ref={displayValue2}>Change Password</li>
                        <li className="listItem" onClick={exportData4} ref={displayValue4}>Logout</li>
                    </ul>
                </div>
            </div>
                </header>
            <NewComponent/>
                </React.Fragment>

            )
    }
}

export default WrapperHOC;