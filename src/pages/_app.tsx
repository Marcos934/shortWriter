import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Port+Lligat+Slab&display=swap" rel="stylesheet"/>
      </Head>
     <Component {...pageProps} />
    </div>
    )
}

export default MyApp
