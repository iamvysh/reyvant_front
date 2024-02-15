import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
// const navigate=useNavigate()
const initialState = {
  cart: [],

};



const cartSlice=createSlice({
    name:"cartproducts",
    initialState,
    reducers:{
         AddToCart:(state,action)=>{
            const newProducts=action.payload
            const cartproduct=state.cart.find((item)=>item._id===newProducts._id)
            if(!cartproduct){
                state.cart.push(newProducts)
                alert("item added to cart succefully,please checkout")
                // navigate("/cart")
            }else{
                alert("item already in the cart")
            }
         },
         removeItemFromCart(state, action) {
            const itemIdToRemove = action.payload;
            console.log(itemIdToRemove,"idtoremove");
            state.cart = state.cart.filter(item => item._id !== itemIdToRemove);
          },
    }
})

export const {
    AddToCart,removeItemFromCart
 
  } = cartSlice.actions;
  export default cartSlice.reducer;