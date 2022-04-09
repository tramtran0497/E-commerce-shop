import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "cart",
    // define initial State
    initialState: {
        product: [],
        quantity: 0,
        total: 0
    },
    reducers:{
        addProduct: (state, action) =>{
            state.quantity += action.payload.quantity;
            state.product.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        }
    }
})

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer;