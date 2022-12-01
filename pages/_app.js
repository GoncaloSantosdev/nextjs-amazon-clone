// Redux
import { Provider } from "react-redux";
import { store } from '../redux/store';
// Auth
import { SessionProvider } from "next-auth/react"
// Styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
