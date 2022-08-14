import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../Components/Dashboard'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Treb - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Dashboard />
     
    </div>
  )
}

export default Home
