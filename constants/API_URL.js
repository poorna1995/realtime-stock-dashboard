const domain = `https://stocks.hivepath.io/api`;

const API_URL = {
	STOCK_DATA: {
		FETCH_STOCK_DATA: `${domain}/stockdata`,
		FETCH_FILTER_STOCK_DATA: `${domain}/filterstockdata`,
	},
	UNICORN_DATA: {
		FETCH_UNICORN_COMPANY_DATA: `${domain}/unicorncompanydata`,
		FETCH_FILTER_UNICORN_COMPANY_DATA: `${domain}/filtercompanydata`,
	},
};

export const { STOCK_DATA, UNICORN_DATA } = API_URL;
export default API_URL;
