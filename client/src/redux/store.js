import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Combine your slices into a root reducer
const rootReducer = combineReducers({
    user: userSlice
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

// Create a persisted reducer using the persist configuration and root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Configure the Redux store with the persisted reducer and necessary middleware
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// Create a persistor to be used with PersistGate
export const persistor = persistStore(store)
