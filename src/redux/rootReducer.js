import { combineReducers } from "redux";
import newsReducer from "./news/newsReducer";
import modeReducer from "./mode/modeReducer";
import categoryReducer from "./categoryNews/categoryReducer";

const rootReducer = combineReducers({
    newsState: newsReducer,
    modeState: modeReducer,
    categoryState: categoryReducer,
})

export default rootReducer;