import { CHANGE_PASS } from "../Actions/ChangePass";

const initialData = {
    userName:'XYZ',
    password:456
}

const changePasswordReducer = (state=initialData,action)=>{
    switch(action.type){
        case CHANGE_PASS: return {
            ...state, 
            password:789
        }
        default : return state
    }
}

export default changePasswordReducer