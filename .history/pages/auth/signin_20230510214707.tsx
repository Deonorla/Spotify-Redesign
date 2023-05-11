import type { NextPage } from 'next';
import { getProviders } from "next-auth/react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Loader from "../../Components/Loader";

const signin: NextPage = ({providers}: any) => {
    const { data: session}  = useSession(); 
    const router = useRouter();

    useEffect(()=>{
         if(session){
            router.push("/");
         }
    },[session])

    
    if(session) return <Loader />;
  
  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
        <Head>
           <title>Login - Spotify Redesign</title>
           <link rel="icon" href="/favicon.ico" />
        </Head>

      <Image
         src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
         height={250}
         width={600}
         objectFit ="contain"
         className="animate-pulse m-8"
      />
      {Object.values(providers).map((provider: any) => (
        <div key={provider.id}>
            <button className="text-white py-4 px-6 rounded-full 
            bg-[#1db954] ease-out border border-transparent uppercase
            transition duration-300 font-bold text-xs md:text-base tracking-wider
            hover:scale-105 hover:bg-[#0db146]" onClick={
                ()=> signIn(provider.id)} >
                Sign in with {provider.name}
        
            </button>
        </div>
      ))}
    </div>
  )
}

export default signin;

export async function getServerSideProps() {
    const providers =  await getProviders();
    return {
        props: { providers },
    }
}