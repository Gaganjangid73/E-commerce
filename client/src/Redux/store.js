import { configureStore } from "@reduxjs/toolkit";
import Authreducer from "./authSlice";

const store = configureStore({
 // here we are configure or create your store a and in this we add your  reducer 
  reducer: {
    auth: Authreducer,
  },
});

export default store;
