import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import InsertBreadcrumbs from '../../../Redux/Actions/BreadCrumbs'
import { ChangeStateDispatch, ChangeStateProps } from '../../../Redux/Middleware/ChangeStateMiddleware'
import './AboutPage.css'
export default connect(ChangeStateDispatch, ChangeStateProps)(function AboutPage(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(InsertBreadcrumbs({ name: "About", path: "/dashboard/about" }))
    }, [])
    return (
        <div className='About'>
            <div className="LB">

                <div className="Container">

                    <div className="AboutHeading">
                        <h1>
                            Personal Details
                        </h1>
                    </div>
                    <div className="FormsColumns">
                        <div className="column">
                            <div className="row1">
                                Employee ID:
                            </div>
                            <div className="row2">
                                Name (As per Aadhar Card) :
                            </div>
                            <div className="row3">
                                Date of Joining :
                            </div>
                            <div className="row4">
                                Father's or Husband's Name :
                            </div>
                            <div className="row5">
                                Mobile Number :
                            </div>
                            <div className="row6">
                                Educational Qualification :
                            </div>
                            <div className="row7">
                                Is Handicapped :
                            </div>
                            <div className="row8">
                                Bank A/C No
                                <span className='Imp'>
                                    (Only ICICI)
                                </span> :
                            </div>
                            <div className="row9">
                                IFSC of Bank A/C :
                            </div>
                            <div className="row10">
                                UAN No :
                            </div>
                        </div>
                        <div className="column">
                            <div className="row1">
                                <input type="number" disabled value='1234' />
                            </div>
                            <div className="row2">
                                <input type="text" disabled value='XYZ' />
                            </div>
                            <div className="row3">
                                <input type="date" disabled value="2018-05-01" />
                            </div>
                            <div className="row4">
                                <input type="text" disabled value='ABC' />
                            </div>
                            <div className="row5">
                                <input type="number" disabled value='1234567890' />
                            </div>
                            <div className="row6">
                                <select disabled >
                                    <option value="0">Select Option:</option>
                                    <option value="1">Graduate</option>
                                    <option value="2">Post Graduate</option>
                                    <option value="3">Senior Secondary</option>
                                </select>
                            </div>
                            <div className="row7">
                                <select disabled value='2'>
                                    <option value="0">Select Option:</option>
                                    <option value="1">YES</option>
                                    <option value="2">NO</option>
                                </select>
                            </div>
                            <div className="row8">
                                <input type="number" disabled value='123456' />
                            </div>
                            <div className="row9">
                                <input type="text" disabled value='ABX123' />
                            </div>
                            <div className="row10">
                                <input type="text" disabled value='147258' />
                            </div>
                        </div>
                        <div className="column">
                            <div className="row1">
                                Your Name :
                            </div>
                            <div className="row2">
                                Date Of Birth (DD/MM/YYYY) :
                            </div>
                            <div className="row3">
                                Gender :
                            </div>
                            <div className="row4">
                                Relation :
                            </div>
                            <div className="row5">
                                Email Id (Other than Chetu) :
                            </div>
                            <div className="row6">
                                Marital Status :
                            </div>
                            <div className="row7">
                                Is ICICI Bank A/C :
                            </div>
                            <div className="row8">
                                Your Name (As Per Bank Account) :
                            </div>
                            <div className="row9">
                                Is Previous Bank Account :
                            </div>
                            <div className="row10">
                                EPF No. :
                            </div>
                        </div>
                        <div className="column">
                            <div className="row1">
                                <input type="text" disabled value='xyz' />
                            </div>
                            <div className="row2">
                                <input type="date" value="1995-05-02" disabled />
                            </div>
                            <div className="row3">
                                <select disabled value='2'>
                                    <option value="0">Select Option:</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Others</option>
                                </select>
                            </div>
                            <div className="row4">
                                <select disabled value='1'>
                                    <option value="0">Select Option:</option>
                                    <option value="1">Father</option>
                                    <option value="2">Husband</option>
                                    <option value="3"></option>
                                </select>
                            </div>
                            <div className="row5">
                                <input type="email" disabled value='xyz@ghi.com' />
                            </div>
                            <div className="row6">
                                <select disabled value='2'>
                                    <option value="0">Select Option:</option>
                                    <option value="1">Married</option>
                                    <option value="2">Unmarried</option>
                                </select>
                            </div>
                            <div className="row7">
                                <select disabled value='2'>
                                    <option value="0">YES</option>
                                    <option value="1">NO</option>
                                </select>
                            </div>
                            <div className="row8">
                                <input type="text" disabled value='XYZ' />
                            </div>
                            <div className="row9">
                                <select disabled value='1'>
                                    <option value="0">YES</option>
                                    <option value="1">NO</option>
                                </select>
                            </div>
                            <div className="row10">
                                <input type="text" disabled value='987654321654' />
                            </div>
                        </div>
                    </div>
                    <div className="DocInput">
                        <div className="DocColumn">
                            <div className="DocRow1">
                                PAN No :
                            </div>
                            <div className="DocRow2">
                                Aadhaar Number :
                            </div>
                        </div>
                        <div className="DocColumn">
                            <div className="DocRow1">
                                <input type="text" disabled value='ABCD123456W' />
                            </div>
                            <div className="DocRow2">
                                <input type="text" disabled value='1234 1234 1234 1234' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
)