import '../styles/globals.css';
import '../styles/all.css';

// page
import All from '../components/All';

function MyApp({ Component, pageProps }) {
  return (
     <All>
       <Component {...pageProps} />
     </All>
  )
}

export default MyApp
