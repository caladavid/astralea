import ImageSVG from '@/public/assets/svgs/ImageSVG'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ScheduleCards = ({ schedulesInfo }) => {
    return (
        <div className='flex mx-auto flex-col-reverse gap-10'>
            {schedulesInfo?.map((anime, index) => (
                <Link
                    key={index}
                    href={`/anime/${anime.mal_id}`}
                    className='flex md:flex-col lg:flex-row gap-6 overflow-hidden border-t border-gray-400 pt-10 group'
                >
                    <time className='w-[10%] lg:text-end'>{anime.broadcast.time}</time>
                    <div className='flex flex-col md:flex-row w-full gap-6'>
                        {anime?.images?.webp?.large_image_url ? (
                            <Image
                                src={anime?.images?.webp?.large_image_url}
                                alt={anime?.title}
                                width={288}
                                height={160}
                                sizes="100vw"
                                className='hidden md:block w-full max-w-[288px] max-h-[200px] lg:max-h-[160px] h-auto rounded-sm object-cover'
                            />
                        ) : (
                            <div className=' rounded-md min-w-[288px] h-[200px] lg:h-[160px]  mb-4 flex justify-center items-center bg-gray-300 animate-pulse '>
                                <ImageSVG />
                            </div>
                        )}
                        <div className='w-full flex flex-col justify-between'>
                            <div>
                                <h2 className='flex lg:text-xl font-bold mb-2 group-hover:text-secondaryColor transition-colors'>{anime.title}</h2>
                                <p className='text-sm md:text-base overflow-hidden text-ellipsis line-clamp-2 max-h-[4rem]'>{anime.synopsis}</p>
                            </div>
                            <div className='flex flex-wrap pt-2 text-sm md:text-base gap-4 '>
                                {anime.genres.map((genre) => (
                                    <Link
                                        href={`/browse?genres=${genre.mal_id}`}
                                        key={genre.mal_id}
                                        className='border-b border-primaryColor  hover:bg-primaryColor hover:border-[#d64f48] hover:text-bgColor py-1 px-6 transition-all'
                                    >
                                        {genre.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ScheduleCards