import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import bookReducer from "./bookReducer";
import genreReducers from "./genreReducers";


export default combineReducers({
  books: bookReducer,
  genres: genreReducers,
  form: formReducer
})
