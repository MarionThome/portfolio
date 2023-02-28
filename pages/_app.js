import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Marion Thomé - Portfolio</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

