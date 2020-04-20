import { SHOPLIST } from "~/action/ShopAction";


// Default State
const initialState = {
    shopList: null,
};

// Reducer
function reducer(state = initialState, action:any)  {
  switch (action.type) {
    case SHOPLIST: 
      return {
          ...state , shopList:action.payload
      }
  }
  return state;
}

// Exports Default
export default reducer;