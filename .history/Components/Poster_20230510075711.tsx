import type { NextPage } from "next";
import { BsFillPauseFill, BsFillPlayFill } from  "react-icons/bs"
import { useRecoilState } from "recoil";
import { playingTrackState, playState } from "../atom/playAtom";

interface Props {
    track: any,
    chooseTrack: any,
}

const Poster: NextPage<Props> = ({ track, chooseTrack }) => {
     const [play, setPlay] = useRecoilState(playState);
     const [playingTrack, setPlayingTrack] = useRecoilState<any>(playingTrackState);

  const handlePlay = () =>{
    chooseTrack(track); 
    if(track.id === playingTrack.id){
        setPlay(!play) 
      
     }
  }

  return (
    <div className="w-[14rem] h-[360px] rounded-[50px] overflow-hidden
    relative text-white/80 cursor-pointer hover:scale-105 
    hover:text-white/100 transition duration-200 ease-out
    group-hover:mx-auto"
    onClick={handlePlay}
    >
        <img src={track.albumUrl} 
        alt="" 
        className="h-full w-full absolute inset-0
        object-cover rounded-[50px] opacity-80 
        hover:opacity-100
        " />

        <div className="absolute bottom-10 inset-x-0 ml-4
        flex items-center space-x-3.5
        ">
            <div className="h-10 w-10 bg-[#15883e] flex items-center justify-center rounded-full
            hover:bg-[#1db954] flex-shrink-0">
                { track.id === playingTrack.id && play ? (
                    <BsFillPauseFill  className="text-xl"/>
                ) : (
                    <BsFillPlayFill  className="text- ml-[1px]"/>
                 ) }
            </div>

            <div className="text-[15px]">
              <h4 className="font-extrabold truncate w-44">{track.title}</h4>
              <h6 className="">{track.artist}</h6>
            </div>
        </div> 

    </div>
  )
}

export default Poster