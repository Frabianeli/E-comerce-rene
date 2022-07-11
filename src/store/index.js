import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice'
import isLoading from './slices/isLoading.slice'
import cart from './slices/cart.slice'
import categories from './slices/categories.slice'
import search from './slices/search.slice'

export default configureStore({
  reducer: {
    products,
    isLoading,
    cart,
    categories,
    search
  }
})