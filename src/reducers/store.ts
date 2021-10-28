import players from './playerReducer';
import languages from './languageReducer';
import {combineReducers, createStore} from "redux";

/**
 * Combines all reducers into a single store containing
 * various states from players and languages
 */
const reducers = combineReducers({players, languages});
const store = createStore(reducers);

export default store;
