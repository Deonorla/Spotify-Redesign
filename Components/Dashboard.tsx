import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import SpotifyWebApi from "spotify-web-api-node";
import { playingTrackState } from '../atom/playAtom';
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
});


const Dashboard: NextPage = () =>{ 
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

    const chooseTrack = (track: any) =>{
        setPlayingTrack(track);
    };

    return(
        <main>
           <Sidebar/>
           <Body spotifyApi = {spotifyApi} chooseTrack={chooseTrack} />
           <Right/>
        </main>
    )
}

export default Dashboard;