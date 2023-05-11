import { useRecoilState } from "recoil";
import { playState, playingTrackState } from "../atom/playAtom";

interface RecentlyPlayedProps {
 track: any,
 chooseTrack: any
}
const RecentlyPlayed = ({track, chooseTrack}:RecentlyPlayedProps) => {
    const [play, setPlay] = useRecoilState(playState);
    const [playingTrack, setPlayingTrack] = useRecoilState<any>(playingTrackState);
    const handlePlay = () =>{
        chooseTrack(track); 
        if(track.id === playingTrack.id){
            setPlay(!play) 
          
         }
      }
  return (
    <div className=" flex items-center space-x-3">
       <img src={track.albumUrl} alt=" "/>
    </div> 
  )
}

export default RecentlyPlayed