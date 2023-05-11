import { useRecoilState } from "recoil";
import { playState, playingTrackState } from "../atom/playAtom";
import { useEffect } from "react";

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
 },[])

  return (
    <div>
         
    </div>
  )
}

export default Player