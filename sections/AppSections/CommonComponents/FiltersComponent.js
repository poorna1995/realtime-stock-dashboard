import { Button, Grid } from "@mui/material";
import FormSelectInput from "components/Common/Inputs/SelectInput";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { uniqBy } from "lodash";
export default function FiltersComponent({
	usedInPath,
	basePath,

	cities,
	countries,
	industries,
	companies,
}) {
	const router = useRouter();
	const company = router.query.company;
	const country = router.query.country;
	const industry = router.query.industry;
	const city = router.query.city;

	const companyValue = {
		label: company,
		value: company,
	};

	const countryValue = {
		label: country,
		value: country,
	};
	const industryValue = {
		label: industry,
		value: industry,
	};
	const cityValue = {
		label: city,
		value: city,
	};
	const [selectedValues, setSelectedValues] = useState([]);
	const uniqueSelectedValues = uniqBy(selectedValues, "filterTitle");

	const newFilters =
		Array.isArray(uniqueSelectedValues) &&
		selectedValues
			.map((item) => {
				const { filterTitle, valueSelected } = item;
				return `${filterTitle}=${valueSelected}`;
			})
			.flat();
	const joinThePath = Array.isArray(newFilters) && newFilters.join("&");

	const handleValueChanges = (e, item) => {
		setSelectedValues((prevState) => {
			const data = prevState.filter((it) => item.key !== it.filterTitle);
			return [
				...data,
				{
					filterTitle: item.key,
					valueSelected: e.value,
					// [field]: value,
				},
			];
		});
	};

	useEffect(() => {
		router.push(`${basePath}&${joinThePath}`);
	}, [selectedValues]);
	console.log({ router });
	const data = [
		{
			title: "Country",
			key: "country",
			value: countryValue,
			options: countries,
			// [
			// 	{ label: "India", value: "india" },
			// 	{ label: "Australia", value: "australia" },
			// ],
		},
		{
			title: "Company",
			key: "company",
			value: companyValue,
			options: companies,
			// [
			// 	{ label: "shopify", value: "shopify" },
			// 	{ label: "native", value: "native" },
			// ],
		},
		{
			title: "City",
			key: "city",
			value: cityValue,
			options: cities,
			// [
			// 	{ label: "shopify", value: "shopify" },
			// 	{ label: "native", value: "native" },
			// ],
		},
		{
			title: "Industry",
			key: "industry",
			value: industryValue,
			options: industries,
			//  [
			// 	{ label: "shopify", value: "shopify" },
			// 	{ label: "native", value: "native" },
			// ],
		},
	];
	console.log({
		companyValue,
		countryValue,
		industryValue,
		cityValue,
		selectedValues,
		countries,
		companies,
		cities,
		industries,
	});

	const [filtersList, setFiltersList] = useState();
	useEffect(() => {
		setFiltersList(data);
	}, []);
	const handleClearFilters = () => {
		router.push(`${basePath}`);
        setSelectedValues([])
	};
	if (filtersList)
		return (
			<div>
				<Grid container spacing={2} sx={{ px: "16px", pb: 1 }}>
					{Array.isArray(filtersList) &&
						filtersList.map((item, index) => (
							<Grid item md={3} key={index}>
								<FormSelectInput
									title={`${item.title} (${item.options.length})`}
									placeholder={item.title}
									value={item.value}
									onChange={(e) =>
										handleValueChanges(e, item)
									}
									options={item.options}
									containerStyles={{
										marginTop: "0px",
										paddingTop: "0px",
									}}
								/>
							</Grid>
						))}
                        <Button onClick={handleClearFilters}>
                            Clear Filters
                        </Button>
				</Grid>
			</div>
		);
}
