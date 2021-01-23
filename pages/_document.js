import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <meta
            name='description'
            content='早稲田大学を中心としたインカレサークル。スタートアップの沼にハマった学生がゆるく集まるコミュニティ。インターンを募集しているスタートアップ企業の方もお気軽にご連絡ください。熱中できるものを探している学生も集まっています！'
          />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Wit' />
          <meta
            property='og:url'
            content='https://wit-website-omega.vercel.app/'
          />
          <meta
            property='og:description'
            content='早稲田大学を中心としたインカレサークル。スタートアップの沼にハマった学生がゆるく集まるコミュニティ。インターンを募集しているスタートアップ企業の方もお気軽にご連絡ください。熱中できるものを探している学生も集まっています！'
          />
          <meta property='og:image' content='/images/ogp-iogo.png' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link rel='stylesheet' href='/fonts/fonts.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
