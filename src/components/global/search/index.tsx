import { SearchIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Search = (props: Props) => {
  return (
      <div className='flex overflow-hidden gap-x-2 border-[1px] border-[#CC3804] rounded-full px-4 py-1 items-center flex-1'>
          <SearchIcon color='#CC3804'/>
        Search
      </div>
  )
}

export default Search