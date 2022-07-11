import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: null,
    reducers: {
      setCategories: (state, action) => action.payload
    }
})

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;