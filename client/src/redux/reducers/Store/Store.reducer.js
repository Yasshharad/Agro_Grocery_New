import { GET_Store, GET_SPECIFIC_Store } from "./Store.type";

const initialState = {
  Stores: [],
  selectedStore: {},
};

const StoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_Store:
      return {
        ...state,
        Stores: [...action.payload],
      };
    case GET_SPECIFIC_Store:
      return {
        ...state,
        selectedStore: { ...action.payload },
      };
    default:
      return {
        ...state,
      };
  }
};

export default StoreReducer;
