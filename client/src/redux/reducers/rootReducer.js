import { combineReducers } from "redux";

// reducers or storage units
import auth from "./auth/auth.reducer";
import user from "./user/user.reducer";
import Store from "./Store/Store.reducer";
import image from "./image/image.reducer";
import review from "./review/review.reducer";
import Product from "./Product/Product.reducer";
import cart from "./cart/cart.reducer";

const rootReducer = combineReducers({
  auth,
  user,
  Store,
  image,
  review,
  Product,
  cart,
});

export default rootReducer;
