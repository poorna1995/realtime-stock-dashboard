import { Provider } from "react-redux";
import { persistor, store } from "../redux/configureStore";
import { PersistGate } from "redux-persist/integration/react";
import "styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "theme";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { useRef } from "react";
import NextNProgress from "nextjs-progressbar";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	const snackbarRef = useRef();

	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<QueryClientProvider client={queryClient}>
					<SnackbarProvider
						ref={snackbarRef}
						autoHideDuration={3000}
						maxSnack={3}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						preventDuplicate
						variant="success"
					>
						<NextNProgress />
						<Component {...pageProps} />
					</SnackbarProvider>
					{/* <ReactQueryDevtools initialIsOpen /> */}
				</QueryClientProvider>
			</ThemeProvider>
		</Provider>
	);
}

export default MyApp;
