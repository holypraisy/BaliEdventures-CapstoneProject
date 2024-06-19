import { combineReducers } from "redux";
import cartReducer from "./cart/cartSlices.js";
import productReducer from "./trip/productSlice.js";
// import addressReducer from "./userInfo/addressSlice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        // address: addressReducer
    }
);

export default rootReducer;