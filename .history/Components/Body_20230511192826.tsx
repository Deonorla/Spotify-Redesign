import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Search from './Search';
import Poster from './Poster';
import Track from './Track';


interface Props {
  spotifyApi: any,
  chooseTrack: any,
}

const Body: NextPage<Props>  = ({spotifyApi, chooseTrack}) => { 
  const { data: session} = useSession();
  const  accessToken : any = session?.accessToken;
  const [find, setFind] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [newRelease, setNewRelease] = useState<string[]>([]); 
  
 useEffect(()=>{
   if(!accessToken) return;
   spotifyApi.setAccessToken(accessToken);
 },[accessToken])

 // Searching...
  useEffect(()=>{
   if(!find) return setSearchResults([]);
   if(!accessToken) return;
   spotifyApi.searchTracks(find).then((res: any)  => {
    setSearchResults(res.body.items.map((track: any) => {
      return{
        id: track.id,
        artist: track.artists[0].name,
        title: track.name,
        url: track.uri,
        albumUrl: track.album.images[0].url,
        popularity: track.popularity,
      }

    }))
  
   })

  },[find, accessToken])

 // New Releases...
  useEffect(()=>{
  
   if(!accessToken) return;
   spotifyApi.getNewReleases(find).then((res: any)  => {
    setNewRelease(res.body.albums.items.map((track: any) => {
      return{
         id: track.id,
         artist: track.artists[0].name,
         title: track.name,
         url: track.uri,
         albumUrl: track.images[0].url,
      }
    }))
  })


  },[find, accessToken])


  return (
    <section className='bg-black ml-24 py-4 space-y-8 md:max-w-5xl
    flex-grow md:mr-2.5' >
      <Search find={find} setFind={setFind} />

      <div className='grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 gap-[12px] p-4'>
         {searchResults.length === 0 ? newRelease.slice(0,4).map((track: any)=>(
           <Poster 
           key={track.id} 
           track = {track} 
           chooseTrack={chooseTrack} 
            />
         )) : searchResults.slice(0,4).map((track: any) => (
          <Poster 
          key={track.id} 
          track = {track}
          chooseTrack={chooseTrack} 
           />
         ))}
      </div>

      <div className='flex gap-x-8 absolute min-w-full md:relative
      ml-6'>
       {/* Genres */}
       <div className='hidden xl:inline max-w-[270px]'>
        <h2 className='text-white font-bold mb-3'>Genres</h2>
        <div className='flex gap-x-2 gap-y-2.5 flex-wrap mb-3'>
          <div className='genre'> Classic</div>
          <div className='genre'> House</div>
          <div className='genre'> Minimal</div>
          <div className='genre'> Hip Hop</div>
          <div className='genre'> Electronic</div>
          <div className='genre'> Chilout</div>
          <div className='genre'> Blues</div>
          <div className='genre'> Country</div>
          <div className='genre'> Techno</div>
        </div>
         <button className='btn'>
           All Genres
         </button>
       </div>    

       {/* Tracks */}
       <div>
        <h2 className='text-white font-bold mb-3'>
           {searchResults.length === 0 ? 
        "New Releases" : "Tracks" }</h2>
        <div className='space-y-3 border-2 border-[#262626] rounded-2xl
        p-3 bg-[#0d0d0d] overflow-y-scroll h-[1000px] md:h-96
        scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded
        hover:scrollbar-thumb-gray-500 w-[700px]'>
          { searchResults.length === 0
            ? newRelease
            .slice(4, newRelease.length)
            .map((track: any) => (
              <Track
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
               />
            ))
            : searchResults.slice(4, searchResults.length)
            .map((track: any) => (
              <Track 
               key={track.id}
               track={track}
               chooseTrack={chooseTrack}
              />
            ))
          }
        </div>
       </div> 
      </div>
     </section >
  )
} 

export default Body;