import {createSlice} from "@reduxjs/toolkit"

const initState ={
    login: false,
    register: false,
    register2: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: initState,
    reducers: {
        showlogin: (state) => {
            state.login = true
            state.register = false
            state.register2 = false
        },
        hidelogin: (state) => {
            state.login = false
        },
        showregister: (state) => {
            state.register = true
            state.login = false
        },
        hideregister: (state) => {
            state.register = false
        },
        showregister2: (state) => {
            state.register2 = true
            state.login = false
        },
        hideregister2: (state) => {
            state.register2 = false
        }
    }
})

export const {showlogin, hidelogin, showregister, hideregister, showregister2, hideregister2} = loginSlice.actions
export default loginSlice.reducer