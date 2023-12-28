import { createSlice } from "@reduxjs/toolkit"; //here create Slice is enough because we are not accessing any api

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {cartItems: []}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
})

export default cartSlice.reducers