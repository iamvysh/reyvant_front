import { combineReducers, configureStore, createReducer } from '@reduxjs/toolkit'
import productReducer from "./product/ProduxSlice"
import cartReducer from "./product/CartSclice"
import{ persistReducer,persistStore }from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({product:productReducer,cart:cartReducer});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
   serializableCheck: false,
  }),
})
export const persistor = persistStore(store);
