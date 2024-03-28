import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Star from '@/public/assets/svgs/Star';
import AnimeCardSkeleton from '../Skeletons/AnimeCardSkeleton';

const AnimeCard = ({ anime }) => {

    // Prevent the default behavior on link mouse down
    const onLinkMouseDown = (e) => {
        e.preventDefault();
    };

    // Use the nullish coalescing operator (??) to set animeScore to 'N/A' if anime.score is null or undefined
    const animeScore = anime.score ?? 'N/A';

    return (
        <Link
            href={`/anime/${anime.mal_id}`}
            onMouseDown={onLinkMouseDown}
            className='flex flex-col justify-center text-center items-center w-[215px] py-2'
        >
            <div className='relative group group2  '>
                {anime?.images?.webp?.large_image_url ? (
                    <Image
                        src={anime?.images?.webp?.large_image_url}
                        alt={anime?.title}
                        width={0}
                        height={0}
                        style={{ width: '100%', height: 'auto' }}
                        sizes="100vw"
                        className='min-h-[300px] min-w-[215px]  max-h-[300px] h-auto rounded-sm object-cover group hover:opacity-80 hover:scale-[1.02] hover:shadow-xl transition-all'
                    />
                ) : <AnimeCardSkeleton />}

                <span
                    className='absolute bg-tertiaryColor group-hover:-right-[1.05px] text-customGray font-bold w-[40%] bottom-4 right-0 text-end opacity-90 pr-1 z-0 flex justify-around group-hover:scale-[1.02] transition-all'>
                    {animeScore} <Star />
                </span>
            </div>
            <h2 className='text-center font-medium overflow-hidden text-ellipsis line-clamp-2 max-h-[4rem] py-4'>{anime.title}</h2>
        </Link>
    )
}

export default AnimeCard