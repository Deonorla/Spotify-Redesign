import type { NextPage } from "next";

interface Props {
  track: any,
  choosetrack: any,
}

const Track: NextPage<Props> = ({track, chooseTrack}) => {
  return (
    <div className='flex items-center justify-between space-x-20 cursor-default
    hover:bg-white/10 py-4 rounded-lg group transition ease-out '>
      <div className='flex items-center'>
        <img src={track.albumUrl} alt=""/>
      </div>
    </div>
  )
}

export default Track;  