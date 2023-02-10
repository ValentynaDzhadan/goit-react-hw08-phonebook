import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.auth';
import { contactsReducer } from './contacts/slice.contacts';
import { filterReducer } from './filter/slice.filter';
import { userReducer } from './user/slice.user';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authPersistedReducer,
    user: userReducer,
  },
  // devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
