import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { HubReducer } from "./reducer";

const persistConfig = {
    key: "hubadmin",
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig,HubReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  });
  

let persister = persistStore(store);

export {store,persister}