import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import likeReducer from "../reducer/reducer";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'reducer',
  storage: storage
};

const persistRed = persistReducer(persistConfig, likeReducer);
const store = createStore(persistRed);
persistStore(store)

export default store
