import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Elevan - OnlyFans Management Agency</title>
        <meta name="description" content="Scale Your OnlyFans to Six Figures with Elevan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
