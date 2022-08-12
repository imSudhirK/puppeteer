import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer';
import softyReducer from './softy/softyReducer';
import burgerReducer from './burger/burgerReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    softy: softyReducer,
    burger: burgerReducer
})

export default rootReducer;