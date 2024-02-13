import MuiBaseDataGrid from "components/Common/Tables/MuiBaseDataGrid";
import { UNICORN_DATA } from "constants/API_URL";
import { groupBy } from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import appFetch from "utils/appFetch";
import FiltersComponent from "../CommonComponents/FiltersComponent";

export default function UnicornMarketTableSection() {
	const [data, setData] = useState();
	const router = useRouter();
	const company = router.query.company;
	const country = router.query.country;
	const industry = router.query.industry;
	const city = router.query.city;
	const [isLoading, setIsLoading] = useState(false);

	const fetchStocksData = () => {
		setIsLoading(true);
		const URL = UNICORN_DATA.FETCH_UNICORN_COMPANY_DATA;
		const data = {
			page: 1,
			perpage: 1000,
		};
		appFetch(URL, data)
			.then((json) => {
				console.log({ json });
				setData(json.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setIsLoading(false);
			});
	};
	console.log({ data });
	const fetchFilteredData = () => {
		setIsLoading(true);
		const URL = UNICORN_DATA.FETCH_FILTER_UNICORN_COMPANY_DATA;
		const data = {
			page: 1,
			perpage: 1000,
			company,
			country,
			industry,
			city,
		};
		appFetch(URL, data)
			.then((json) => {
				setIsLoading(false);
				setData(json.data);
			})
			.catch((err) => {
				console.log({ err });
				setIsLoading(false);
			});
	};
	useEffect(() => {
		if (company || country || industry || city) {
			return fetchFilteredData();
		}
		return fetchStocksData();
	}, [company, country, industry, city]);
	// {
	//     "city": "San Francisco",
	//     "company": "Snapdocs",
	//     "country": "United States",
	//     "date_joined": "5/25/2021",
	//     "industry": "Fintech",
	//     "select_investors": "Sequoia Capital, Y Combinator, F-Prime Capital",
	//     "updated_at": "2023-03-02T13:29:02.306124",
	//     "valuation": 1.5
	// }
	const columnsData = [
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
			field: "city",
			headerName: "City",
			width: 130,
		},
		{
			field: "industry",
			headerName: "Industry",
			width: 130,
			flex: 1,
		},
		{
			field: "valuation",
			headerName: "Valuation",
			width: 130,
		},
		{
			field: "date_joined",
			headerName: "Date Joined",
			width: 130,
		},
		{
			field: "select_investors",
			headerName: "Select Investors",
			flex: 1,
		},
	];
	const groupByCity = groupBy(data, "city");
	const groupByCountry = groupBy(data, "country");
	const groupByIndustry = groupBy(data, "industry");
	const groupByCompany = groupBy(data, "company");
	console.log({
		groupByCity,
		groupByCountry,
		groupByIndustry,
		groupByCompany,
	});

	const getCities = Object.keys(groupByCity);
	const getCountries = Object.keys(groupByCountry);
	const getIndustries = Object.keys(groupByIndustry);
	const getCompanies = Object.keys(groupByCompany);
	console.log({
		getCities,
		getCountries,
		getIndustries,
		getCompanies,
	});
	const mapItemsWithLabel = (data = []) => {
		return (
			Array.isArray(data) &&
			data.map((item) => {
				return { label: item, value: item };
			})
		);
	};
	const cities = mapItemsWithLabel(getCities);
	const countries = mapItemsWithLabel(getCountries);
	const industries = mapItemsWithLabel(getIndustries);
	const companies = mapItemsWithLabel(getCompanies);

	if (Array.isArray(data) && data.length > 0)
		return (
			<div>
				<FiltersComponent
					basePath={`/unicorn?tab=market`}
					cities={cities}
					countries={countries}
					industries={industries}
					companies={companies}
				/>
				<MuiBaseDataGrid
					data={data}
					rowIdkey={"company"}
					columnDefData={columnsData}
					checkboxSelection={false}
					loading={isLoading}
				/>
			</div>
		);
}
