import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/users/authSlice';
import counterReducer from './features/counter/counterSlice';
import { productApi } from './services/products/productApi';

export const store = configureStore({
	reducer: {
		authState: authReducer,
		counter: counterReducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	devTools: process.env.PUBLIC_URL !== 'production',

	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({}).concat([productApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
