"use client"
import React, { useState } from 'react'
import { GetAnimeSearch } from '@/app/actions';
import { useRouter } from 'next/navigation';
import SearchSVG from '@/public/assets/svgs/SearchSVG';
import { usePathname } from 'next/navigation'

const SearchBar = ({ ClassName, IsHide = false }) => {
  const pathName = usePathname();
  const router = useRouter()
  const [text, setText] = useState("");
  const isAnimeRoute = pathName.match(/^\/anime\/\d+$/);

   // Function to handle search on Enter key press
  const handleSearch = async (e) => {
    if (text.trim() === '') {
      return; // Avoid search if the field is empty
    }
    
    if (e.key === "Enter") {
      await GetAnimeSearch(text);
      router.push(`/browse?q=${text}`);
    }
  }

  // Function to handle search on click
  const handleClick = async () => {
    if (text.trim() === '') {
      return; 
    }
    await GetAnimeSearch(text);
    router.push(`/browse?q=${text}`); // Redirect to search results page
  }

  return (
    <div className={`${ClassName} ${IsHide ? "hidden md:flex" : ""} relative flex items-center group`}>
      <SearchSVG className="absolute mx-4 stroke-secondaryColor cursor-pointer" onClick={handleClick}/>
      <input
        value={text}
        placeholder='Search'
        aria-label="Search bar"
        onChange={e => setText(e.target.value)}
        onKeyDown={handleSearch}
        className={`${isAnimeRoute ? "bg-bgColor text-customGray" : "bg-transparent"} text-base w-full transition-all  border-2 border-secondaryColor  py-2 pl-12 rounded-md font-bold group-hover:border-secondaryColor  focus:outline-secondaryColor`}
      />
    </div>
  )
}

export default SearchBar