import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({ 
    todos: todoReducer,
    auth: authReducer,
    blog: blogReducer
})

export default rootReducer;