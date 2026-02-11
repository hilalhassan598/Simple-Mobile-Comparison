import { configureStore,combineReducers } from "@reduxjs/toolkit";
import productReducer from "./Slice/ProductsSlice"
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
const persistConfig = {
  key: "product",
  storage,
}
const persistedProductReducer = persistReducer(persistConfig, productReducer)
export const store=configureStore({
    reducer:{
        product:persistedProductReducer,
    }
})
export const persistor = persistStore(store)