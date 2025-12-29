// pages/_app.js
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NU Feedback</title>
        {/* <meta name="description" content="أفضل موقع لتجربة Next.js" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
