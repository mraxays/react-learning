import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            console.log(action);
            // On this way we can not use async code like setTimeout or fetch because it will not work with redux toolkit, we can only use sync code here
            // setTimeout(() => {
            //     state.value += action.payload
            // }, 1000)

            // So we can use redux-thunk to handle async code in redux toolkit, we can create a thunk function that will dispatch the action after the async code is done
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
// This is a thunk function that will dispatch the incrementByAmount action after 2 seconds
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 2000)
}

export default counterSlice.reducer