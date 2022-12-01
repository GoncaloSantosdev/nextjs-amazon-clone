import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);

      let newBasket = [...state.items];

      if(index >= 0){
        newBasket.splice(index, 1);
      } else { 
        console.log('Product is not in the basket');
      }
      
      state.items = newBasket;
    }
  }
});

// Export actions
export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - Pull information from the Global Store
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;