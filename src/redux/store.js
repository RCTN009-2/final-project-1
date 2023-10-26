import { configureStore } from "@reduxjs/toolkit";
import getReducer from "./FetchAPI";
import saveReducer from "./Save";

const store = configureStore({
  reducer: {
    getData: getReducer,
    saveData: saveReducer,
  },
});

export default store;
