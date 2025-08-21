import { configureStore } from "@reduxjs/toolkit";
import Authreducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: Authreducer,
  },
});

export default store;