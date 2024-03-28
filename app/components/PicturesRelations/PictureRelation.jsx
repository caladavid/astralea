"use client"
import { GetAnimeFullById } from '@/app/actions';
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImageSVG from '@/public/assets/svgs/ImageSVG';

const PictureRelation = ({ info }) => {
    const [animeData, setAnimeData] = useState(null);

     // Effect to fetch anime data when info changes
    useEffect(() => {
        const fetchData = async () => {
            const data = await GetAnimeFullById(info.mal_id);
            setAnimeData(data.data);
        };

        fetchData();
    }, [info]);

    return (
        <div>
            {animeData ? (
                <div className='group flex justify-center mx-auto sm:mx-0 max-w-fit'>
                    <Link href={`/anime/${info.mal_id}`} className='relative max-w-[180px] '>
                        <Image
                            src={animeData?.images.webp.large_image_url}
                            alt={animeData?.title}
                            width={180}
                            height={240}
                            style={{ width: "180px", height: "240px" }}
                            sizes="100vw"
                            className="rounded-md object-cover relative min-w-[180px] min-h-[240px] w-auto "
                        />
                        <span className='text-bgColor z-[1] p-2 w-full hidden group-hover:block absolute bottom-0 after:w-full after:-z-10 after:h-full after:bg-gradient-to-t after:from-[#101010] after:via-[rgba(0,_0,_0,_0.8)] after:to-transparent after:rounded-b-sm after:absolute after:bottom-0 after:left-0 '>{info.name}</span>
                    </Link>
                </div>
            ) : (
                <div className='flex justify-center items-center bg-gray-300 animate-pulse w-[180px] h-[240px] rounded-md  '>
                    <Link href={`/anime/${info.mal_id}`} className='h-full w-full flex flex-col justify-around items-center text-center'>
                        <ImageSVG />
                        <span className='text-customGray '>{info.name}</span>
                    </Link>
                </div>
            )}
        </div>
    )
}


export default PictureRelation