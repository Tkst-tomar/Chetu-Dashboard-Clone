import changePassword from "../Actions/ChangePass"

const ChangePasswordProps = (state) => {
  console.log(state)
    return {
        msg:state.RPMsg,
        class:state.RPClass
    }
  }
  
const ChangePasswordDispatch = (dispatch) => {
    return {
        changePass: () =>{dispatch(changePassword())}
    }
  }


export {ChangePasswordProps}
export {ChangePasswordDispatch}