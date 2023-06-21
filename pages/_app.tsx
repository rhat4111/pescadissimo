import type { AppProps } from 'next/app';
import { StoreProvider } from 'store';

import { Layout } from 'layouts';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider >
  );
};

export default MyApp
