import { CHANGE_STATE } from "../Actions/ChangeState";
import { CHECK_PASS } from "../Actions/CheckPass";
import { userId, password } from "../../Dash Board/Login Page/Login";
import { AUTH_FALSE } from "../Actions/AuthFalse";
import { CHANGE_PASS } from "../Actions/ChangePass";
import { newPass, conPass, userNameRes } from "../../Dash Board/TL Dashboard/Sub Components/ResetPassword";
import { INSERT_BREADCRUMBS } from "../Actions/BreadCrumbs";

const initialData = {                              // Initial State whish is an object contains different fields as data
    IClass: 'fas fa-eye',
    InpType: 'password',
    status: true,
    Username: 'XYZ',
    password: 456,
    authentication: false,
    PClass: 'none',
    Nav: '/',
    RPMsg: '',
    RPClass: 'none',
    breabCrumbs: []
}

const ChangeStateReducer = (state = initialData, action) => {
    console.log(state)
    switch (action.type) {
        case CHANGE_STATE:                         // For a particular action, we can change anything that is is initial state
            if (state.status == true) {

                return {
                    ...state,
                    IClass: 'fas fa-eye-slash',
                    InpType: 'text',
                    status: false
                }
            } else {
                return {
                    ...state,
                    IClass: 'fas fa-eye',
                    InpType: 'password',
                    status: true
                }
            }
        case CHECK_PASS:

            if (state.Username == userId.current.value && state.password == password.current.value) {
                return {
                    ...state,
                    authentication: true,
                    PClass: 'none',
                    Nav: 'dashboard/welcome'
                }
            } else {
                return {
                    ...state,
                    authentication: false,
                    PClass: 'block fail',
                    Nav: '/'
                }
            }
        case AUTH_FALSE:
            return {
                ...state,
                authentication: false
            }
        case CHANGE_PASS:
            if (newPass.current.value == '') {
                return {
                    ...state,
                    RPMsg: 'Password Cannot Be Blank',
                    RPClass: 'RMsg block'
                }

            } else if (newPass.current.value == conPass.current.value) {
                return {
                    ...state,
                    password: newPass.current.value,
                    RPMsg: 'Password Reset Successfully',
                    RPClass: 'RMsgConfirm block'
                }
            } else if (newPass.current.value != conPass.current.value) {
                return {
                    ...state,
                    RPMsg: 'Password Does Not Match',
                    RPClass: 'RMsg block'
                }
            } else {
                return {
                    ...state,
                    RPClass: 'none'
                }
            }
            case INSERT_BREADCRUMBS:
                const data = action.payload.name
                // console.log("BreadCrumbs >>", state.breabCrumbs)
                state.breabCrumbs.forEach((x,index) => {
                    // console.log("Redux Compiler >>",index, state.breabCrumbs.length)
                    if(x.name == data){
                        state.breabCrumbs.splice(index)
                        // console.log("Spliced Data ..", state.breabCrumbs.splice(index))
                    }
                });
                state.breabCrumbs.push(action.payload)
                return {
                    ...state
                }
        default: return state
    }
}

export default ChangeStateReducer