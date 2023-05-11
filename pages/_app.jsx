import ReduxWrapper from "../components/ReduxWrapper";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ReduxWrapper>
      <Component {...pageProps} />
    </ReduxWrapper>
  );
}

export default MyApp;
