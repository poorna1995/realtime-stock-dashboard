import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	newProductData: {},
	newProductImages: [],
	selectedProducts: [],
	editProductData: [],
	publishProductData: {
		selectedStore: null,
		selectedProducts: [],
	},
	selectedStore: {},
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setNewProductData(state, action) {
			state.newProductData = action.payload;
		},
		updateNewProductData(state, action) {
			state.newProductData = {
				...state.newProductData,
				...action.payload,
			};
		},
		addNewProductImages(state, action) {
			state.newProductImages = [
				action.payload,
				...state.newProductImages,
			];
		},
		removeAllProductImages(state, action) {
			state.newProductImages = [];
		},
		deleteNewproductImage(state, action) {
			state.newProductImages = state.newProductImages.filter(
				(item) => item !== action.payload,
			);
		},
		setSelectedPublishableProducts(state, action) {
			state.selectedProducts = [...action.payload];
		},
		setEditProductData(state, action) {
			state.editProductData = action.payload;
		},
		setEditProductImages(state, action) {
			state.editProductData.images = [
				...state.editProductData.images,
				...action.payload,
			];
		},
		deleteEditProductImage(state, action) {
			state.editProductData.images = state.editProductData.images.filter(
				(item) => item !== action.payload,
			);
		},
		setSelectedPublishableStore(state, action) {
			state.selectedStore = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	setNewProductData,
	updateNewProductData,
	addNewProductImages,
	removeAllProductImages,
	deleteNewproductImage,
	setSelectedPublishableProducts,
	setEditProductData,
	setEditProductImages,
	deleteEditProductImage,
	setSelectedPublishableStore,
} = productsSlice.actions;

export default productsSlice.reducer;
