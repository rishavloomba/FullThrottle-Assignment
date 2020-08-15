import 'react-google-flight-datepicker/dist/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url(https://fonts.googleapis.com/css?family=Righteous);
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: white;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp