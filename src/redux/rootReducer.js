import { combineReducers } from 'redux'
import cakeReducer from './cake/cakeReducer';
import softyReducer from './softy/softyReducer';
import burgerReducer from './burger/burgerReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    softy: softyReducer,
    burger: burgerReducer,
    user: userReducer
})

export default rootReducer;