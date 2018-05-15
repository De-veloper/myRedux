//Create store so import redux
import { createStore } from 'redux'
//import fuction from reducer
import carReducer from '../reducers/carReducers'

export default createStore(carReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())