import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#131424" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
