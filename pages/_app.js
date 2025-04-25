// Global styles
import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';

// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
