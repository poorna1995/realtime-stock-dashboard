/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import RouterTabs from "components/Common/Tabs/RouterTabs";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import StocksMarketTableSection from "./StocksMarketTableSection";

export default function StockMarketAnalysisPageSections() {
	const router = useRouter();
	const { tab } = router.query;
	const data = [
		{
			label: "Market Table",
			component: <StocksMarketTableSection />,
			route: "market",
		},
		{
			label: "Analysis",
			component: () => <p>first tb</p>,
			route: "analysis",
		},
		{
			label: "Industries",
			component: () => <p>first tb</p>,
			route: "industries",
		},
	];

	const [tabsData, setTabsData] = React.useState();
	useEffect(() => {
		setTabsData(data);
	}, []);

	if (tabsData)
		return (
			<Box>
				<SectionTitleText
					sx={{
						my: 1,
					}}
				>
					Stocks Market Analysis
				</SectionTitleText>
				<RouterTabs data={tabsData} />
			</Box>
		);
}
