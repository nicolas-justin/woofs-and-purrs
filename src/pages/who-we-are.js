import Head from 'next/head';

import WhoWeAreTemplate from 'templates/WhoWeAre';

function WhoWeAre() {
  return (
    <>
      <Head>
        <title>Who We Are: Woofs &amp; Purrs</title>
      </Head>

      <WhoWeAreTemplate />
    </>
  );
}

export default WhoWeAre;
