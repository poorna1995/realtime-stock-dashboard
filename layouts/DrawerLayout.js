import { Box } from "@mui/material";
import AppHeader from "components/AppHeader";
import AppNavigationDrawer from "components/Common/Drawer/AppNavigationDrawer";
import MiniDrawer from "components/Common/Drawer/MiniDrawer";
import drawerNavLinks from "constants/navigation/drawerNav";
import Head from "next/head";
import React from "react";

export default function DrawerLayout({ pageTitle, children }) {
	return (
		<Box>
			<Head>
				<title>{pageTitle || "Ecommerce Dashboard App"}</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AppHeader />
			
			<MiniDrawer links={drawerNavLinks}>
				{children}
			</MiniDrawer>
		</Box>
	);
}
