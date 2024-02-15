import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],

};



const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
         AllProducts:(state,action)=>{
            state.products=action.payload
         },
         searchProducts: (state, action) => {
            const searchQuery  = action.payload;
            console.log(searchQuery);
            state.products = state.products.filter(product =>
              product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            console.log(state.products,"hjhjjghd");
          },
    }
})

export const {
    AllProducts,searchProducts
 
  } = productSlice.actions;
  export default productSlice.reducer;