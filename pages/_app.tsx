import React from 'react';
import { AppProps, Container } from 'next/app';
import '../styles/globals.css';
import Header from 'src/components/Header';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />;
    </Container>
  )
}

export default MyApp;
