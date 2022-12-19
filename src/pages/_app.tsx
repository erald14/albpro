import "../styles/global.css";

import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
      </React.Suspense>
    </RecoilRoot>
  </QueryClientProvider>
);

export default MyApp;
