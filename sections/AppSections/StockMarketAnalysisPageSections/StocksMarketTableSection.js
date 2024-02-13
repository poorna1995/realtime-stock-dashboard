import { useQuery } from "@tanstack/react-query";
import MuiBaseDataGrid from "components/Common/Tables/MuiBaseDataGrid";
import { STOCK_DATA } from "constants/API_URL";
import React, { useEffect, useState } from "react";
import appFetch from "utils/appFetch";
import FiltersComponent from "../CommonComponents/FiltersComponent";

export default function StocksMarketTableSection() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const fetchStocksData = () => {
		setIsLoading(true);
		const URL = STOCK_DATA.FETCH_STOCK_DATA;
		const data = {
			page: 1,
			perpage: 1000,
		};
		appFetch(URL, data)
			.then((json) => {
				console.log({ json });
				setIsLoading(false);
				setData(json.data);
			})
			.catch((error) => console.log(error));
	};
	console.log({ data });
	useEffect(() => {
		fetchStocksData();
	}, []);
	/**{
      "change": -1.44, 
      "company": "Avantis Real Estate ETF", 
      "country": "USA", 
      "id": 22298, 
      "industry": "Exchange Traded Fund", 
      "market_cap": 0.0, 
      "p_e": NaN, 
      "price": 41.83, 
      "sector": "Financial", 
      "ticker": "AVRE", 
      "updated_at": "2023-03-02T11:22:58.253710", 
      "volume": 22298.0
    },  */
	const columnsData = [
		{
			field: "id",
			headerName: "ID",
			width: 70,
		},
		{
			field: "ticker",
			headerName: "Ticker",
			width: 130,
		},
		{
			field: "company",
			headerName: "Company",
			width: 200,
		},
		{
			field: "country",
			headerName: "Country",
			width: 130,
		},
		{
			field: "sector",
			headerName: "Sector",
			width: 130,
		},
		{
			field: "industry",
			headerName: "Industry",
			width: 130,
		},
		{
			field: "price",
			headerName: "Price",
			width: 130,
		},
		{
			field: "change",
			headerName: "Change",
			width: 130,
		},
		{
			field: "p_e",
			headerName: "P/E",
			width: 130,
		},
		{
			field: "volume",
			headerName: "Volume",
			width: 130,
		},
		{
			field: "market_cap",
			headerName: "Market Cap",
			width: 130,
		},
		{
			field: "updated_at",
			headerName: "Updated At",
			width: 130,
		},
	];
	// add filters for
	// company,sector, industry, country, market cap

	return (
		<div>
			{/* <FiltersComponent /> */}
			<MuiBaseDataGrid
				data={data}
				rowIdkey={"id"}
				columnDefData={columnsData}
				checkboxSelection={false}
				loading={isLoading}
			/>
		</div>
	);
}
