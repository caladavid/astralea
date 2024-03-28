import React from 'react'
import SearchBar from '../Header/SearchBar'
import HomeStarSVG from '@/public/assets/svgs/HomeStarSVG'

const HeroText = () => {
  return (
    <div className='relative flex flex-col text-center items-center gap-10 py-24 lg:py-32 w-full'>
      <HomeStarSVG className='absolute hidden md:block md:h-20 xl:h-32 bottom-8 xl:bottom-20 left-0' />
      <HomeStarSVG className='absolute hidden md:block md:h-20 xl:h-32 top-8 xl:top-20 right-0 rotate-180' />
      <div>
        <h2 className='text-2xl md:text-2xl lg:text-5xl font-bold lg:leading-normal'>Unlock the Anime Universe</h2>
        <h3 className='text-2xl md:text-2xl lg:text-3xl'>Explore, filter, and stay updated on every series and premiere</h3>
      </div>
      <SearchBar ClassName="w-[60%]" />
    </div>
  )
}

export default HeroText