"use client"
import React, { useEffect, useState } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { GetGenres } from '@/app/actions';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import SpinnerSVG from '@/public/assets/svgs/SpinnerSVG';

const PopularGenres = () => {
  const genreIds = [1, 2, 22, 4, 10, 8];
  const [genreDetails, setGenreDetails] = useState(null);
  const { ref, inView } = useInView({ threshold: 1 });
  const title = "popular genres";

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (inView) {
          const selectedGenre = genreIds[0];
          const genreDetailsResponse = await GetGenres(selectedGenre);
          setGenreDetails(genreDetailsResponse);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [inView]);

   // Filter genre details based on provided genreIds
  const filteredGenre = genreDetails?.filter(
    (genre) => genreIds.includes(genre.mal_id));

  return (
    <div ref={ref} className='py-10 overflow-hidden'>
      <Wrapper>
        <div className='flex flex-col justify-center mx-auto gap-4'>
          <div>
            <div className='flex justify-center px-2 flex-col min-[580px]:flex-row min-[425px]:justify-between font-bold pb-10'>
              <h2 className='text-2xl mx-auto md:text-2xl lg:text-3xl font-bold capitalize'>{title}</h2>
              <span className='hidden min-[580px]:block mx-4 flex-grow border-b my-auto  border-solid border-primaryColor transition-colors'></span>
              <Link
                href="/browse"
                className='hidden min-[580px]:block mx-auto text-secondaryColor hover:text-tertiaryColor w-fit text-xl text-end md:text-2xl lg:text-3xl'>
                View more
              </Link>
            </div>

            <div>
              <div className='grid grid-cols-2 md:grid-cols-3 2xl:flex w-full gap-2 md:gap-4 '>
                {filteredGenre ? (
                  filteredGenre.map((anime, index) => (
                    <Link
                      key={index}
                      href={`/browse?genres=${anime.mal_id}`}
                      className='w-full flex items-center justify-center flex-grow text-primaryColor hover:text-bgColor sm:text-xl font-bold border-2 border-primaryColor hover:bg-primaryColor py-4 px-4 md:px-8 rounded-lg transition-colors'
                    >
                      {anime.name}
                    </Link>
                  ))
                ) : (
                  <div className='mx-auto col-span-full'>
                    <SpinnerSVG />
                  </div>
                )}
              </div>
              <div className='pt-4 flex min-[580px]:hidden'>
                <Link
                  href="/browse"
                  className='w-full text-secondaryColor transition-colors hover:text-tertiaryColor font-bold text-xl text-center md:text-2xl lg:text-3xl'>
                  View more
                </Link>

              </div>

            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default PopularGenres