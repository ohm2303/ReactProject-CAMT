import {createSlice} from "@reduxjs/toolkit"

const initState ={
    review: []
}

export const reviewSlice = createSlice({
    name: 'review',
    initialState: initState,
    reducers: {
        setReview: (state, action) => {
            state.review = action.payload
        }
    }
})

export const {setReview} = reviewSlice.actions
export default reviewSlice.reducer