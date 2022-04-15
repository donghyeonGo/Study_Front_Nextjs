import '../styles/globals.css';
import Header from '../componetns/Header';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    throw Error();
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
