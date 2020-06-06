import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'


import userReducer from './user/reducer';
import tasksReducer from './tasks/reducer';

const storeSchema = combineReducers({
    user: userReducer,
    tasks: tasksReducer,
});

const loggerMiddleware = createLogger();

const store = createStore(
    storeSchema,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

export default store;