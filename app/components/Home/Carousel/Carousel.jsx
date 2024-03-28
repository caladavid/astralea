"use client"
import AnimeCard from '../AnimeCard'
import './carousel.css'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import AnimeCardSkeleton from '../../Skeletons/AnimeCardSkeleton';
import { useEffect, useState } from 'react';


const Carousel = ({ slides, title, href }) => {
  const [visibleImages, setVisibleImages] = useState(1);

  useEffect(() => {
    const updateVisibleImages = () => {
      const screenWidth = window.innerWidth;

      // Define breakpoints and corresponding visible images
      const breakpoints = [2360, 1780, 1536, 1480, 1170, 885, 580, 320];
      const visibleImages = [6, 5, 4, 5, 4, 3, 2, 1];

      // Find the matching breakpoint index
      const breakpointsIndex = breakpoints.findIndex(
        (breakpoint) => screenWidth >= breakpoint
      );

      // Set visible images based on the index (if found)
      setVisibleImages(visibleImages[breakpointsIndex] || 1);
    }

    // Update visible images on initial render and window resize
    updateVisibleImages();
    window.addEventListener('resize', updateVisibleImages);

    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener('resize', updateVisibleImages);
    };
  }, []);

  return (
    <div className='relative overflow-hidden py-8'>
      <div className='flex justify-center flex-col min-[580px]:flex-row min-[425px]:justify-between font-bold px-2 py-8'>
        <h2 className='w-fit mx-auto text-2xl md:text-2xl 2xl lg:text-3xl capitalize'>{title}</h2>
        <span className='hidden min-[580px]:block mx-4 flex-grow border-b my-auto justify-center border-solid border-primaryColor'></span>
        <Link
          href={`/browse?${href}`}
          className='text-secondaryColor mx-auto hover:text-tertiaryColor w-fit text-xl text-end md:text-2xl lg:text-3xl transition-colors'>
          View more
        </Link>
      </div>
      <div className='flex items-center overflow-hidden cursor-grab' >

        {slides.length === 0 ? (
          <div className='grid grid-cols-1 min-[580px]:grid-cols-2 min-[885px]:grid-cols-3 min-[1170px]:grid-cols-4 min-[1536px]:grid-cols-4 min-[1480px]:grid-cols-5 min-[1780px]:grid-cols-5 min-[2240px]:grid-cols-6 '>
            <AnimeCardSkeleton cards={visibleImages} />
          </div>
        ) : (
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              580: { slidesPerView: 2, spaceBetween: 10 },
              885: { slidesPerView: 3, spaceBetween: 15 },
              1170: { slidesPerView: 4, spaceBetween: 20 },
              1480: { slidesPerView: 5, spaceBetween: 20 },
              1536: { slidesPerView: 4, spaceBetween: 20 },
              1780: { slidesPerView: 5, spaceBetween: 20 },
              2240: { slidesPerView: 6, spaceBetween: 20 },
            }}
            modules={[Navigation]}
            navigation
          >
            {slides &&
              slides.map((anime, index) => (
                <SwiperSlide key={index}>
                  {anime &&
                    <AnimeCard anime={anime} />
                  }
                </SwiperSlide>
              ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default Carousel