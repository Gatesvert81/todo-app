import { applyMiddleware } from 'redux'
import { createStore, combineReducers } from 'redux'
import logger  from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Reducers/reducer';



const store = createStore(reducer)

export default store