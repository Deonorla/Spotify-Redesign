import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";
import Head from 'next/head';
import Dashboard from '../Components/Dashboard';
import Loader from '../Components/Loader';


const Home: NextPage = () => {
  const router = useRouter();
  const {status, data: session} = useSession({
     required: true,
     onUnauthenticated() {
         router.push('/auth/signin');
     },
  });
  
  if(status === "loading"){
    return <Loader />;
  }

 
  return (
    <div className="">
      <Head>
        <title>Spotify Redesign- Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Dashboard />
     
    </div>
  )
}

export default Home
