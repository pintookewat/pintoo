import { createStore } from "redux";
import rootReducer from "./Combin";


const store = createStore(rootReducer);

export default store;