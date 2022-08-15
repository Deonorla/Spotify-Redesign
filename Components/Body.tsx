import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Search from './Search';

interface Props {
  spotifyApi: any,
}

const Body: NextPage<Props>  = ({spotifyApi}) => {
  const { data: session} = useSession();
  const {accessToken}:any = session;
  const [find, setFind] = useState<string>("");
  const [search, setSearchResult] = useState<string[]>([]);
  const [newRelease, setNewRelease] = useState<string[]>([]);

 useEffect(()=>{
   if(!accessToken) return;
 },[])

  return (
    <section className='bg-black ml-24 py-4 space-y-8 md:max-w-6xl 
    flex-grow md:mr-2.5' >
      <Search find={find} setFind={setFind} />

      <div className='grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
         
      </div>
     </section >
  )
}

export default Body;