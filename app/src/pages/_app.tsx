import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Coding Game</title>
        <meta
          name="description"
          content=""
        />
        {/* <link rel="icon" href="" />
        <meta name="theme-color" content="#0A0" />
        <link rel="manifest" href="/app.webmanifest" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
