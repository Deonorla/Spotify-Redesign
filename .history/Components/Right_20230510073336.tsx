import type { NextPage } from 'next';

interface Props {
  spotifyApi: any,
  chooseTrack: any,
}
const Right = ({spotifyApi, chooseTrack}: Props) => {

  return (
    <section className='p-4 space-y-8 pr-8 '>
        <div className='flex space-x-2 items-center justify-between' >
           {/* Icons */}
           <div className='flex items-center space-x-4 border-4 border-[#262626] rounded-full h-12 py-3 px-4'>

           </div>
        </div>
    </section>
  )
}

export default Right;