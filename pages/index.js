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
        </Head>
        <UserPanel />
        <footer></footer>
      </div>
    </>
  )
}
