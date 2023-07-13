import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER
import servicesReducer from "./Reducers/ServicesSlice";

export default configureStore({
  reducer: {
    services: servicesReducer,
  },
});
