import type { NextPage } from 'next';
import SpotifyWebApi from "spotify-web-api-node";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
});


const Dashboard: NextPage = () =>{

    return(
        <main>
           <Sidebar/>
           <Body spotifyApi = {spotifyApi}/>
           <Right/>
        </main>
    )
}

export default Dashboard;