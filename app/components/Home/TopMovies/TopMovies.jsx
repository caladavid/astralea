"use client"
import React, { useEffect, useState } from 'react'
import { GetTopMovies } from '@/app/actions';
import Wrapper from '../../Wrapper/Wrapper';
import Link from 'next/link';
import Image from 'next/image';
import Star from '@/public/assets/svgs/Star';
import { useInView } from 'react-intersection-observer';

import 'swiper/css/grid';
import ImageSVG from '@/public/assets/svgs/ImageSVG';

const TopMovies = () => {
    const [TopMovies, setTopMovies] = useState([]);
    const [visibleImages, setVisibleImages] = useState(1);
    const { ref, inView } = useInView({ threshold: 0 });
    const title = "top movies";

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (inView) {
                    const TopMoviesResponse = await GetTopMovies();
                    setTopMovies(TopMoviesResponse.data)
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [inView]);

    useEffect(() => {
        const updateVisibleImages = () => {
            const screenWidth = window.innerWidth;

            // Define breakpoints and corresponding visible images
            const breakpoints = [2360, 1810, 1250, 768, 425];
            const visibleImages = [8, 6, 4, 2, 2];

            // Find the matching breakpoint index
            const breakpointsIndex = breakpoints.findIndex(
                (breakpoint) => screenWidth >= breakpoint
            );

            // Set visible images based on the index (if found)
            setVisibleImages(visibleImages[breakpointsIndex] || 1); // Default to 1
        }

        // Update visible images on initial render and window resize
        window.addEventListener('resize', updateVisibleImages);
        updateVisibleImages();

        // Cleanup function to remove event listener on unmount
        return () => {
            window.removeEventListener('resize', updateVisibleImages);
        };
    }, []);

    if (!Array.isArray(TopMovies)) {
        return null;
    }

    return (
        <div ref={ref} className='py-10 '>
            <Wrapper>
                <div className='gap-4'>
                    <div className='flex justify-center px-2 flex-col min-[580px]:flex-row min-[425px]:justify-between font-bold pb-10'>
                        <h2 className='text-2xl mx-auto md:text-2xl lg:text-3xl font-bold capitalize'>{title}</h2>
                        <span className='hidden min-[580px]:block mx-4 flex-grow border-b my-auto  border-solid border-primaryColor'></span>
                        <Link
                            href={`/browse?type=movie&orderBy=popularity&sortBy=asc`}
                            className='hidden min-[580px]:block mx-auto text-secondaryColor hover:text-tertiaryColor w-fit text-xl text-end md:text-2xl lg:text-3xl transition-colors'>
                            View more
                        </Link>
                    </div>
                    {TopMovies && (
                        <div className=' flex flex-col lg:flex-row justify-center items-center gap-4'>
                            {TopMovies.length > 0 && TopMovies ? (
                                <Link
                                    href={`/anime/${TopMovies[0].mal_id}`}
                                    className=''
                                >
                                    <div className='relative group'>
                                        <Image
                                            src={TopMovies[0].images.webp.large_image_url}
                                            alt={TopMovies[0].title}
                                            width={426}
                                            height={0}
                                            sizes="100vw"
                                            className='object-cover hover:opacity-80 group-hover:scale-[1.02] rounded-sm h-auto max-w-[215px] min-[580px]:min-w-[435px] lg:min-w-[420px] transition-all'
                                        />
                                        {TopMovies[0].score !== null ? (
                                            <span
                                                className='absolute bg-tertiaryColor group-hover:-right-[1.05px] text-customGray font-bold w-[25%] bottom-4 right-0 text-end opacity-90 pr-1 z-0 flex justify-around group-hover:scale-[1.06] transition-all' >
                                                {TopMovies[0].score} <Star />
                                            </span>
                                        ) : (
                                            <span
                                                className='absolute bg-tertiaryColor group-hover:-right-[1.05px] text-customGray font-bold w-[25%] bottom-4 right-0 text-end opacity-90 pr-1 z-0 flex justify-around group-hover:scale-[1.02] transition-all' >
                                                N/A <Star />
                                            </span>
                                        )
                                        }
                                    </div>
                                    <h2 className='text-center font-medium overflow-hidden text-ellipsis line-clamp-2 max-h-[4rem] pt-2'>{TopMovies[0].title}</h2>
                                </Link>

                            ) : (
                                <div className='bg-gray-300 animate-pulse flex justify-center items-center rounded-sm h-[305px] min-[580px]:h-[618px] lg:h-[597px] w-[215px] min-[580px]:w-[435px] lg:w-[420px]'>
                                    <ImageSVG />
                                </div>
                            )}
                            <div className=' grid grid-cols-1 min-[580px]:grid-cols-2 lg:grid-cols-1 min-[1250px]:grid-cols-2 min-[1810px]:grid-cols-3 min-[2360px]:grid-cols-4 grid-rows-1 lg:grid-rows-2 gap-4'>
                                {TopMovies && TopMovies.length > 0 ? (
                                    TopMovies.slice(1, visibleImages + 1).map(anime => (
                                        <Link
                                            key={anime.mal_id}
                                            href={`/anime/${anime.mal_id}`}
                                            className='w-[210px] group'
                                        >
                                            <div className='relative group'>
                                                <Image
                                                    src={anime.images.webp.large_image_url}
                                                    alt={anime.title}
                                                    width={200}
                                                    height={260}
                                                    sizes="100vw"
                                                    className='object-cover hover:opacity-80 group-hover:scale-[1.02] rounded-sm min-w-[215px] min-[580px]:min-w-[210px] h-[250px] transition-all'
                                                />
                                                {anime.score !== null ? (
                                                    <span
                                                        className='absolute bg-tertiaryColor group-hover:-right-[1.05px] text-customGray font-bold w-[40%] bottom-4 right-0 text-end opacity-90 pr-1 z-0 flex justify-around group-hover:scale-[1.02] transition-all'>
                                                        {anime.score} <Star />
                                                    </span>
                                                ) : (
                                                    <span
                                                        className='absolute bg-tertiaryColor group-hover:-right-[1.05px] text-customGray font-bold w-[40%] bottom-4 right-0 text-end opacity-90 pr-1 z-0 flex justify-around group-hover:scale-[1.02] transition-all'>
                                                        N/A <Star />
                                                    </span>
                                                )
                                                }
                                            </div>
                                            <h2 className=' text-center font-medium overflow-hidden text-ellipsis line-clamp-2 max-h-[4rem] pt-2'>{anime.title}</h2>
                                        </Link>
                                    ))
                                ) : (
                                    <>
                                        {Array.from({ length: visibleImages }).map((_, index) => (
                                            <div key={index} className='mr-8 py-4'>
                                                <div className="relative rounded-md h-60 mb-4 flex justify-center items-center bg-gray-300 animate-pulse min-h-[300px] min-w-[215px] max-h-[300px]">
                                                    <ImageSVG />
                                                </div>
                                                <div className="h-4 bg-gray-300 rounded-full "></div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>


                    )}
                </div>
            </Wrapper>
        </div>
    )
}

export default TopMovies