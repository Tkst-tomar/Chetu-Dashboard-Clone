import AuthFalse from "../Actions/AuthFalse"
import InsertBreadcrumbs from "../Actions/BreadCrumbs"
import changePassword from "../Actions/ChangePass"
// import changePassword from "../Actions/ChangePass"
import changeState from "../Actions/ChangeState"
import CheckPassword from "../Actions/CheckPass"

const ChangeStateProps = (state) => {
    return {
        class: state.IClass,
        type: state.InpType,
        auth: state.authentication,
        pclass: state.PClass,
        nav: state.Nav,
        msg:state.RPMsg,
        rclass:state.RPClass,
        bCrumbs: state.breabCrumbs
    }
  }
  
const ChangeStateDispatch = (dispatch) => {
    return {
        changeState: () => { dispatch(changeState()) },
        checkPass: () =>{ dispatch(CheckPassword())},
        authFalse: () =>{dispatch(AuthFalse())},
        changepass: () =>{dispatch(changePassword())}
        // insBread: (data) =>{dispatch(InsertBreadcrumbs(data))}
    }
  }


export {ChangeStateProps}
export {ChangeStateDispatch}