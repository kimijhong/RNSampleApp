import { combineReducers } from 'redux';
import countReducer from '~/reducers/countReducer';
import ShopReducer from '~/reducers/ShopReducer';

const allReducers = combineReducers({
  countReducer,ShopReducer
});

export default allReducers;