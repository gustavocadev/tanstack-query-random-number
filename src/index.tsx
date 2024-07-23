import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <QueryClientProvider client={queryClient}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}

      <ReactQueryDevtools />
    </QueryClientProvider>,
  );
}
