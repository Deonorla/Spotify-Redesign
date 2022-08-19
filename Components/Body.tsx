import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Search from './Search';
import Poster from './Poster';


interface Props {
  spotifyApi: any,
}

const Body: NextPage<Props>  = ({spotifyApi}) => { 
  const { data: session} = useSession();
  const { accessToken }: any = session;
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
    setSearchResults(res.body.tracks.items.map((track: any) => {
      return{
        id: track.id,
        artist: track.artists[0].name,
        title: track.name,
        url: track.url,
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
        url: track.url,
        albumUrl: track.images[0].url,
      }
    }))
   })

  },[find, accessToken])

 console.log(searchResults);

  return (
    <section className='bg-black ml-24 py-4 space-y-8 md:max-w-6xl 
    flex-grow md:mr-2.5' >
      <Search find={find} setFind={setFind} />

      <div className='grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 
      lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4'>
         {searchResults.length === 0 ? newRelease.slice(0,4).map((track: any)=>(
           <Poster 
           key={track.id} 
           track = {track} 
          //  chooseTrack={chooseTrack} 
            />
         )) : searchResults.slice(0,4).map((track: any) => (
          <Poster 
          key={track.id} 
          track = {track}
          // chooseTrack={chooseTrack} 
           />
         ))}
      </div>
     </section >
  )
}

export default Body;