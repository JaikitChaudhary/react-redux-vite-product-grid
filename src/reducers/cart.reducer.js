import { ADD_TO_CART, DELETE_TO_CART, SHOW_CART, UPDATE_TO_CART } from "../types/cart.type";
const iniState = {
    showCart:false,
    data:[]
}

const cartReducer = (state = iniState, action) => {
  switch (action?.type) {
    case ADD_TO_CART:
      return { ...state, data: [...state?.data, action?.payload] };
    case UPDATE_TO_CART:
      return {
        ...state,
        data: state?.data.map((item) => {
          if (item.id === action?.payload?.id) {
            return { ...item, qty: action?.payload?.qty };
          }
          return item;
        }),
      };
    case DELETE_TO_CART:
      return { ...state, data: state?.data.filter(item => item.id !== action?.payload?.id) };
    case SHOW_CART:
      return { ...state, showCart: action?.payload };
    default:
      return state;
  }
};
export default cartReducer;