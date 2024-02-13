import { Box } from "@mui/material";
import BaseLayout from "layouts";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import StockMarketAnalysisPageSections from "sections/AppSections/StockMarketAnalysisPageSections";
import UnicornAnalysisPageSections from "sections/AppSections/UnicornAnalysisPageSections";

const pagesData = {
	stocks: {
		title: "Stock Market Analysis",
		component: <StockMarketAnalysisPageSections />,
	},
	unicorn: {
		title: "Unicorn Analysis ",
		component: <UnicornAnalysisPageSections />,
	},
};

export default function AppPage() {
	const router = useRouter();
	const { pageType } = router.query;

	const MyComponent = pageType && pagesData[pageType].component;
	return (
		<BaseLayout>
			<Head>
				<title>{pageType && pagesData[pageType].title}</title>
			</Head>
			<Box sx={{ p: 3 }}>{MyComponent}</Box>
		</BaseLayout>
	);
}
