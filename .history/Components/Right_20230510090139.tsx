import type { NextPage } from 'next';
import {HiOutlineShieldCheck} from "react-icons/hi";
import {MdOutlineSettings} from "react-icons/md";
import {BiBell} from "react-icons/bi";
import  {ViewGridIcon} from "@heroicons/react/solid"; 
import DropDown from './DropDown';


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
              <HiOutlineShieldCheck className='text-[#ccc] text-xl' />
              <MdOutlineSettings  className='text-[#ccc] text-xl'/>
              <BiBell   className='text-[#ccc] text-xl'/>
           </div>
           {/* profile */}
             <DropDown />
        </div>
        {/* Recently played tracks */}
        <div className='bg-[#0d0d0d] border-2 border-[#262626] rounded-xl space-y-4'>
           <div className=' flex items-center  justify-between'>
            <h4 className='text-white font-semibold' >Recently Played </h4>
            <ViewGridIcon className='text-[#686868] h-6' />
           </div>
        </div>
    </section>
  )
}

export default Right;  