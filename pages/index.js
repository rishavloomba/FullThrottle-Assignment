import Head from 'next/head';
import UserPanel from '../src/components/UserPanel';

export default function Home() {
  return (
    <>
      <style jsx>{`
      `}</style>
      <div className="container">
        <Head>
          <title>USER DETAILS</title>
          <link rel="icon" type="image/png" sizes="32x32" href="https://fullthrottlelabs.com/favicon-32x32.png"></link>
        </Head>
        <UserPanel />
        <footer></footer>
      </div>
    </>
  )
}
