import BaseLayout from "layouts";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function HomePage() {
	const router = useRouter();

	return (
		<BaseLayout>
			<Head>
				<title>Home</title>
			</Head>
		</BaseLayout>
	);
}
