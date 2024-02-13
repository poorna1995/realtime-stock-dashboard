import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import userSlice from "./user/userSlice";
import viewsSlice from "./views/viewsSlice";
import thirdPartyDataSlice from "./thirdPartyData/thirdPartyDataSlice";
import productsSlice from "./products/productsSlice";

export const rootReducer = combineReducers({
	user: userSlice,
	views: viewsSlice,
	thirdPartyData: thirdPartyDataSlice,
	productsData: productsSlice,
});

const configStorage = {
	key: "root",
	storage,
	whitelist: ["user", "views", "productsData"],
};

export default persistReducer(configStorage, rootReducer);
