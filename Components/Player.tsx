import { useRecoilState } from "recoil";
import { playState, playingTrackState } from "../atom/playAtom";
import { useEffect } from "react";
import  SpotifyPlayer from "react-spotify-web-playback";

interface Props {
    accessToken: any,
    trackUri: any
}

const Player = ({accessToken, trackUri}: Props) => {
    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);

 useEffect(()=>{ 
    if(trackUri){
        setPlay(true)
    }
 },[trackUri])
 if(!accessToken) return null;

  return (
    <div>
          {/* Premium Users */}
      <SpotifyPlayer
        styles={{
          activeColor: "#fff",
          bgColor: "#181818",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
          height: 70, 
          sliderTrackColor: "#535353",
          sliderTrackBorderRadius: "4px",
          sliderHandleColor: "#fff",
          errorColor: "#fff",
        }}
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          setPlay(state.isPlaying);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        magnifySliderOnHover={true}
        autoPlay={true}
      />
    </div>
  )  
}

export default Player;