import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import Header from 'src/components/organisms/Header';
import MaterialThemeProvider from 'src/components/MaterialThemeProvider';
import NoSsr from '@material-ui/core/NoSsr';


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MaterialThemeProvider>
        {/* ここはちゃんと調べる。_app.tsxと_document.tsxについて */}
        <NoSsr>
         <Header />
        </NoSsr>
        <Component {...pageProps} />
      </MaterialThemeProvider>
  )
}

export default MyApp;
