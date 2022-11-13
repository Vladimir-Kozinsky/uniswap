import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import coinsAPI from '../../API/API'

export interface IInitialState {
    popularTokens: Object[];
}

const initialState: IInitialState = {
    popularTokens: []
}

export const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(featchCoin.fulfilled, (state, action) => {
            state.popularTokens.push(action.payload);
        })
        builder.addCase(featchCoin.rejected, (state, action) => {

        })
    }
})

export const featchCoin = createAsyncThunk(
    'coins/featchCoin',
    async (currency: string, thunkAPI) => {
        const response = await coinsAPI.getExchangeRates(currency)
        return response.data
    }
)

// Action creators are generated for each case reducer function
export const { } = coinsSlice.actions

export default coinsSlice.reducer