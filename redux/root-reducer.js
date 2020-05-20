import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {locationReducer} from "./location"
import cartReducer from './Card';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart',"location"]
};

const rootReducer = combineReducers({
location:locationReducer,
  cart: cartReducer,

});

export default persistReducer(persistConfig, rootReducer);