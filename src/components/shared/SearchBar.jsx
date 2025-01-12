import { useRef, } from 'react'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../slices/searchSlice'

// react icons
import { IoSearch } from "react-icons/io5";



const SearchBar = () => {

  const dispatch = useDispatch();
  const searchRef = useRef(null);


  // handle search
  const handleSearch = (event) => {
    if ((event?.key === 'Enter' || event === 'searchButton') && event.target.value?.length > 0) {
      // console.log("Search query = ", event.target.value)

      dispatch(setSearchQuery(event.target.value))
    }
  }

  return (
    <div className='flex items-center h-full  '>
      <input
        type="text"
        placeholder='Search this blog'
        className='w-[300px] md:w-[500px] h-8 lg:h-full
                 text-black bg-white px-[15px] md:px-[30px] 
                 text-[14px] md:text-[18px] outline-none border-none font-medium rounded-l-lg'
        onChange={(e) => handleSearch(e)}
        onKeyUp={handleSearch}
        ref={searchRef}
      />

      <button
        onClick={() => {
          handleSearch('searchButton');
          searchRef.current?.focus();
        }}
        className="flex items-center justify-center bg-orange-500 md:w-[50px] h-full text-white 
                  text-[16px] md:text-[18px] px-4 md:px-0 outline-none border-none rounded-r-lg"
      >
        <IoSearch size={23} />
      </button>
    </div>
  )
}

export default SearchBar
