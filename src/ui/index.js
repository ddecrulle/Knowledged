import React from 'react';
import { createRoot } from 'react-dom/client';
import Root from './root/component';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CoreProvider } from './coreApi';

export const muiCache = createCache({
	key: 'mui',
	prepend: true,
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<CacheProvider value={muiCache}>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<CoreProvider>
					<Root />
				</CoreProvider>
			</ThemeProvider>
		</CacheProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
