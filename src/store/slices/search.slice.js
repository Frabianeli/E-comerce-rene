import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: null,
    reducers: {
      setSearch: (state, action) => action.payload
    }
})

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;