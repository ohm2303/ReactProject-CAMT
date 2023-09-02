import {createSlice} from "@reduxjs/toolkit"

const initState ={
    login: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initState,
    reducers: {
        showlogin: (state) => {
            state.login = true
        },
        hidelogin: (state) => {
            state.login = false
        }
    }
})

export const {showlogin, hidelogin} = loginSlice.actions
export default loginSlice.reducer