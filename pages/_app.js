import '../styles/index.css';
import LayoutComponent from "../components/layout/Layout.component";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  )
}

export default MyApp;
