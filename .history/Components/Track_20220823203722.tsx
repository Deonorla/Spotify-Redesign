import type { NextPage } from "next";
import { ImHeadphones } from "react-icons/im";

interface Props {
  track: any,
  choosetrack: any,
}

const Track: NextPage<Props> = ({track, chooseTrack}) => {
  return (
    <div className='flex items-center justify-between space-x-20 cursor-default
    hover:bg-white/10 py-4 rounded-lg group transition ease-out '>
      <div className='flex items-center'>
        <img 
        src={track.albumUrl} 
        alt="" 
        className="rounded-xl h-12 w-12 
        object-cover mx-3"
        />
        <div className="text-white text-sm font-semibold truncate w-[450px]">
        <h4>{track.title}</h4>
        <p className="text-[rgb(179,179,179)] text-[13px] 
        font-semibold">{track.artist}</p>
        </div>
      </div> 

      <div className="md:ml-auto flex items-center space-x-2.5">
        <div className="text-white flex space-x-1 text-sm 
        font-semibold">   
           <ImHeadphones className="text-lg " />
           <h4 className=" ">{track.popularity}</h4>
        </div>
        <div className="flex items-center rounded-full border-2
        border-[#262626] w-[85px] h-10 relative cursor-pointer
        group-hover:border-white/40 ">
        </div>
      </div>
    </div>
  )
}

export default Track;  