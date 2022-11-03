import "../styles/globals.css";
import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
        <Navbar />
        <div className="pt-32 md:pt-16 max-w-3xl mx-auto">
          <Component {...pageProps} />
        </div>
    </>
  );
}

export default MyApp;
