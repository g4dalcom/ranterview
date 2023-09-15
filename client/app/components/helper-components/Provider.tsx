import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          retry: false,
          // staleTime: (24 - new Date().getHours()) * 60 * 60 * 1000,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};

export default Provider;
