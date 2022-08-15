import Search from './Search';
import { useState } from 'react';
const Body : React.FC = () => {

  const [find, setFind] = useState<string>("");
  const [search, setSearchResult] = useState<string[]>([])

  return (
    <section className='bg-black ml-24 py-4 space-y-8 md:max-w-6xl 
    flex-grow md:mr-2.5' >
      <Search find={find} setFind={setFind} />

      <div>
         
      </div>
     </section >
  )
}

export default Body;