import React from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './root';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CoreProvider } from './coreApi';
import { RouterProvider } from 'react-router-dom';

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
          <RouterProvider router={router} />
        </CoreProvider>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);
