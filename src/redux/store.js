import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger' // we can logger in console 
import { composeWithDevTools } from "redux-devtools-extension";
import {rootReducer} from './reducers'
import thunk from 'redux-thunk';
export let store=createStore(rootReducer,
    applyMiddleware(logger,thunk)
  );