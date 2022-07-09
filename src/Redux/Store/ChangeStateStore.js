import { createStore } from "redux";
import ChangeStateReducer from "../Reducers/ChangeStateReducer";

const ChangeStateStore = createStore(ChangeStateReducer)

export default ChangeStateStore