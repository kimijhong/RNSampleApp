import { createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import allReducers from '~/reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger(); 

const Store = createStore(allReducers,{}, applyMiddleware(ReduxThunk,logger));


export default Store;