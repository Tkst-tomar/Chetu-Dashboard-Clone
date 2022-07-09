import { createStore } from "redux";
// import changePasswordReducer from "../Reducers/ChangePassReducer";
import ChangeStateReducer from "../Reducers/ChangeStateReducer";

const changePasswordStore = createStore(ChangeStateReducer)

export default changePasswordStore
