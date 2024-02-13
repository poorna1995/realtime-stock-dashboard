import { Box } from "@mui/material";
import RouterTabs from "components/Common/Tabs/RouterTabs";
import SectionTitleText from "components/Common/Typography/HeadingText/SectionTitleText";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import StocksMarketTableSection from "../StockMarketAnalysisPageSections/StocksMarketTableSection";
import UnicornMarketTableSection from "./UnicornMarketTableSection";

export default function UnicornAnalysisPageSections() {
	const router = useRouter();
	const data = [
		{
			label: "Market Table",
			component: <UnicornMarketTableSection />,
			route: "market",
		},
		{
			label: "Analysis",
			component: <p>first tb</p>,
			route: "analysis",
		},
		{
			label: "Industries",
			component: <p>first tb</p>,
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
					Unicorn Analysis
				</SectionTitleText>
				<RouterTabs data={tabsData} basePath={"unicorn"} />
			</Box>
		);
}
