import {combineReducers} from 'redux';
import orderReducer from './orderReducer'
import supplierReducer from './supplierReducer'


export default combineReducers({
    orderReducer,
    supplierReducer,
});