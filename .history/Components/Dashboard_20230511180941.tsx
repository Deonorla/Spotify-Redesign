import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import SpotifyWebApi from "spotify-web-api-node";
import { playingTrackState } from '../atom/playAtom';
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Player from './Player';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
});


const Dashboard: NextPage = () =>{ 
    const { data: session } = useSession();
    const accessToken = session?.accessToken;
    
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
    const [showPlayer, setShowPlayer] = useState<boolean>(false)
    
    useEffect(()=> {
        setShowPlayer(true);
    },[])

    const chooseTrack = (track: any) =>{
        setPlayingTrack(track);
    };

    return(
        <main className='flex min-h-screen min-w-max bg-black lg:pb-24'>
           <Sidebar/>
           <Body spotifyApi = {spotifyApi} chooseTrack={chooseTrack} />
           <Right spotifyApi = {spotifyApi} chooseTrack={chooseTrack} />
            
           <div className='fixed bottom-0 left-0 right z-50'>
            <Player />
           </div>
        </main>
    )
}

export default Dashboard;