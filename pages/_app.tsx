/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { GlobalStyle } from '../assets/styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
