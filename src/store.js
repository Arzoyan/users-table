import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducers from "./services/root/rootReducers";
import logger from 'redux-logger';
import rootSaga from './services/root/rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddlewar = createSagaMiddleware();
const middlewares = [logger, sagaMiddlewar];

const persistConfig = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
sagaMiddlewar.run(rootSaga)
export { store, persistor };