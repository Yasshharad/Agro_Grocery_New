import axios from "axios";

import { GET_Product, GET_Product_LIST } from "./Product.type";

export const getProduct = (ProductId) => async (dispatch) => {
  try {
    const Product = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}Product/${ProductId}`,
    });

    return dispatch({ type: GET_Product, payload: Product.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const getProductList = (menuId) => async (dispatch) => {
  try {
    const Menu = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}menu/list/${menuId}`,
    });

    return dispatch({ type: GET_Product_LIST, payload: Menu.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
