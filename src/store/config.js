import { createStore } from "redux";
import { initialState, rootReducers } from "../reducers";

export const store = createStore(rootReducers, initialState);
