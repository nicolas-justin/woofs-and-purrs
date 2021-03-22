import Head from 'next/head';

import HomeTemplate from 'templates/Home';

function Home() {
  return (
    <>
      <Head>
        <title>Home: Woofs &amp; Purrs</title>
      </Head>

      <HomeTemplate />
    </>
  );
}

export default Home;
