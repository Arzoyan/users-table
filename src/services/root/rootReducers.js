import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorige 
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

//---- import all reducers ---------------------------------
import home from '../home/reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
    stateReconciler: autoMergeLevel2,
}

// .. combain all reducers
const rootReducers = combineReducers({
    home,
})

export default persistReducer(persistConfig, rootReducers);
