import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from 'src/components/organisms/Header';
import Footer from 'src/components/organisms/Footer';
import MaterialThemeProvider from 'src/components/MaterialThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MaterialThemeProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MaterialThemeProvider>
  )
}

export default MyApp;
