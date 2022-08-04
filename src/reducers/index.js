// import { exp } from "react-native-reanimated";
import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import HollywoodReducer from "./HollywoodReducer";

const rootReducer= combineReducers({
    MovieReducer,
    HollywoodReducer
})

export default rootReducer;