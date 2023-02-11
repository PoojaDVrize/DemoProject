import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, applyMiddleware, createStore } from 'redux'
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk'
import { loginReducer, profileReducer } from './reducer'

const rootReducer = combineReducers({ loginReducer,profileReducer });

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

let persistedReducer = persistReducer(persistConfig,rootReducer);

export const Store = createStore(persistedReducer, applyMiddleware(thunk));
