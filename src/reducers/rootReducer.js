import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});
export default rootReducer;