import { GET_Product, GET_Product_LIST } from "./Product.type";

const initialState = {
  ProductList: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_Product_LIST: {
      return {
        ...state,
        ProductList: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
export default ProductReducer;
