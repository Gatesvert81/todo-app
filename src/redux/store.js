import { applyMiddleware } from 'redux'
import { createStore, combineReducers } from 'redux'
import logger  from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import exampleReducer from './Reducers/reducer';



const store = createStore(exampleReducer, composeWithDevTools(applyMiddleware(logger)) )

export default store