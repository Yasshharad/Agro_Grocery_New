import axios from "axios";

// redux types
import { GET_Store, GET_SPECIFIC_Store } from "./Store.type";

export const getStore = () => async (dispatch) => {
  try {
    const StoreList = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}Store?city=Mumbai`,
    });

    return dispatch({
      type: GET_Store,
      payload: StoreList.data.Stores,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getSpecificStore = (_id) => async (dispatch) => {
  try {
    const StoreList = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_CLIENT_URL}Store/${_id}`,
    });
    return dispatch({
      type: GET_SPECIFIC_Store,
      payload: StoreList.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
