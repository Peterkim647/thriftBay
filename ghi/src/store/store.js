import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./productsApi";
import { productDetailApi } from "./detailApi";
import { usersApi } from "./userProfileApi";
import { categoryApi } from "./categoryApi";
import { authApi } from "./authApi";
import { newProductApi } from './newProductApi';
import { reviewsApi } from "./reviewsApi";
import { checkoutApi } from "./checkoutApi";


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [productDetailApi.reducerPath]: productDetailApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [newProductApi.reducerPath]: newProductApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [checkoutApi.reducerPath]: checkoutApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      productsApi.middleware,
      productDetailApi.middleware,
      usersApi.middleware,
      categoryApi.middleware,
      usersApi.middleware,
      usersApi.middleware,
      newProductApi.middleware,
      reviewsApi.middleware,
      checkoutApi.middleware,

  ),
});

setupListeners(store.dispatch);
