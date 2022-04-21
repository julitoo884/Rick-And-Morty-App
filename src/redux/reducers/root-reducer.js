import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { colorReducer } from './color';
import { characterReducer } from './characters';


const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['color' , 'characters'],
};


//Se usó ConbineReducers por si se necesita añadir mas reducers
const rootReducer = combineReducers({
	color: colorReducer,
	characters : characterReducer
});

export const reducerMaster = persistReducer(persistConfig, rootReducer);   