"use client"
import { GetAnimeFullById, GetAnimeRecommendations, GetAnimeRelations } from '@/app/actions';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Wrapper from '@/app/components/Wrapper/Wrapper'
import PictureRelation from '@/app/components/PicturesRelations/PictureRelation';
import ReadMore from '@/app/components/Home/ReadMore';
import Image from 'next/image';
import Link from 'next/link';
import ArrowSVG from '@/public/assets/svgs/ArrowSVG';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import ImageSVG from '@/public/assets/svgs/ImageSVG';
import { NotFound } from '@/app/components/NotFound';

const Page = () => {
  const swiperRef = useRef()
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const url = usePathname();
  const [animeData, setAnimeData] = useState([]);
  const [animeRecommendations, setAnimeRecommendations] = useState([]);
  const [animeRelations, setAnimeRelations] = useState([]);
  const [selectedAnimeRelation, setSelectedAnimeRelation] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const animeInfo = [
    { label: 'Format', value: animeData?.type || 'N/A' },
    { label: 'Score', value: animeData?.score || 'N/A' },
    { label: 'Status', value: animeData?.status || 'N/A' },
    { label: 'Year', value: animeData?.year || 'N/A' },
    { label: 'Episodes', value: animeData?.episodes || 'N/A' },
    { label: 'Studio', value: animeData?.studios?.[0]?.name || 'N/A' },
  ];

  const animeInfoTV = [
    { label: 'Format', value: animeData?.type || 'N/A' },
    { label: 'Score', value: animeData?.score || 'N/A' },
    { label: 'Status', value: animeData?.status || 'N/A' },
    { label: 'Year', value: animeData?.aired?.prop?.from?.year || 'N/A' },
    { label: 'Studio', value: animeData?.studios?.[0]?.name || 'N/A' },
  ];

  const animeInfoRelations = [
    { relation: 'Prequel' },
    { relation: 'Sequel' },
    { relation: 'Side story' },
    { relation: 'Alternative version' },
    { relation: 'Parent story' },
  ];

  // Filtered anime relations based on the selected relation
  const filteredAnimesRelation = animeRelations
    ? animeRelations.filter((relation) =>
      relation.relation === selectedAnimeRelation && relation.relation !== null
    ) : [];

  // Prevent the default behavior on link mouse down
  const onLinkMouseDown = (e) => {
    e.preventDefault();
  };

  // Handle click on relation type
  const handleRelationClick = (relation) => {
    setSelectedAnimeRelation((prevRelation) => (prevRelation === relation ? null : relation));
  };

  const hasRelation = (relation) => {
    return animeRelations && animeRelations.some((rel) => rel.relation === relation);
  };

  const hasAnimeInfoTV = animeInfo.some(info => info.label === 'Format' && info.value === 'TV');

  useEffect(() => {
    function calculateSlidesPerView() {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 2360) return 6;
      if (screenWidth >= 1810) return 5;
      if (screenWidth >= 1280) return 4;
      if (screenWidth >= 1235) return 4;
      if (screenWidth >= 910) return 3;
      if (screenWidth >= 580) return 2;
      return 1;
    }

    function handleResize() {
      setSlidesPerView(calculateSlidesPerView());
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idFromUrl = url.split('/').pop();

        const [
          animeData,
          animeRecommendations,
          animeRelations,
        ] = await Promise.all([
          GetAnimeFullById(idFromUrl),
          GetAnimeRecommendations(idFromUrl),
          GetAnimeRelations(idFromUrl),
        ]);

        let sortedRecommendationsAnime = animeRecommendations.data?.slice(0, 20) || [];

        setAnimeData(animeData.data);
        setAnimeRecommendations(sortedRecommendationsAnime);
        setAnimeRelations(animeRelations.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className='min-h-screen'>
      <div className='relative hidden md:block w-[100%] mx-auto h-[calc(350px+5rem)] after:w-full after:h-full after:backdrop-blur-xl after:bg-gradient-to-b after:from-[#101010] before:to-transparent after:absolute -z-[1] '>
        {animeData?.images?.webp?.large_image_url && (
          <Image
            src={animeData?.images?.webp?.large_image_url}
            alt={animeData?.title}
            fill={true}
            sizes="100vw"
            className='object-cover absolute top-0 h-auto'
          />
        )}
      </div>

      <Wrapper>
        {animeData && (
          <div className='pt-36 md:pt-10 flex flex-col md:flex-row md:gap-10 leading-relaxed -z-10 '>
            <div className='md:max-w-[250px] md:-mt-[30%] xl:-mt-[15%]'>
              <h1 className='h-full md:text-bgColor md:[text-shadow:_0_1px_5px_rgb(0_0_0_/_90%)] md:hidden text-center text-xl md:text-2xl lg:text-3xl font-bold'>{animeData.title}</h1>
              <h1 className='h-full md:text-bgColor md:[text-shadow:_0_1px_5px_rgb(0_0_0_/_90%)] md:hidden text-center text-lg md:text-xl lg:text-2xl mb-4'>{animeData.title_english}</h1>
              {animeData?.images?.webp?.large_image_url ? (
                <Image
                  src={animeData.images?.webp?.large_image_url}
                  alt={animeData?.title}
                  width={0}
                  height={288}
                  sizes="100vw"
                  priority
                  className='mx-auto shadow-2xl rounded-md min-w-[250px] min-h-[350px] object-cover w-auto h-auto'
                />
              ) : (
                <div className='animate-pulse'>
                  <div className="h-4 md:hidden bg-gray-300 rounded-full mb-2"></div>
                  <div className="h-3 md:hidden bg-gray-300 rounded-full mb-4"></div>
                  <div className='rounded-md bg-gray-300 flex justify-center mx-auto items-center w-[250px] min-h-[389px]'>
                    <ImageSVG />
                  </div>
                </div>
              )}

              <div className='flex flex-col py-4 gap-2 leading-relaxed w-full min-w-[250px]'>
                {hasAnimeInfoTV ? (
                  animeInfo.map((info, index) => (
                    <span key={index} className='py-2 border-b-[1px] border-gray-500 flex justify-between'>
                      <p className=' border-gray-500 '><strong>{info.label}</strong></p>
                      <p className=' border-gray-500 '>{info.value}</p>
                    </span>
                  ))
                ) : (
                  animeInfoTV.map((info, index) => (
                    <span key={index} className='py-2 border-b-[1px] border-gray-500 flex justify-between'>
                      <p className=' border-gray-500 '><strong>{info.label}</strong></p>
                      <p className=' border-gray-500 '>{info.value}</p>
                    </span>
                  ))
                )}
                {!animeData && (
                  <div className='flex flex-col gap-4'>
                    <div className="h-5 bg-gray-300 rounded-full "></div>
                    <div className="h-5 bg-gray-300 rounded-full "></div>
                    <div className="h-5 bg-gray-300 rounded-full "></div>
                    <div className="h-5 bg-gray-300 rounded-full "></div>
                    <div className="h-5 bg-gray-300 rounded-full "></div>
                    <div className="h-5 bg-gray-300 rounded-full "></div>
                  </div>)}
              </div>
            </div>

            <div className={`${animeData.trailer?.embed_url ? "md:-mt-[30%] xl:-mt-[15%]" : ""} w-full`}>
              {animeData.trailer?.embed_url ? (
                <div>
                  <h1 className='hidden md:text-bgColor md:[text-shadow:_0_1px_5px_rgb(0_0_0_/_90%)] md:block text-xl md:text-2xl lg:text-3xl font-bold'>{animeData.title}</h1>
                  <h1 className='hidden md:text-bgColor md:[text-shadow:_0_1px_5px_rgb(0_0_0_/_90%)] md:block text-lg md:text-xl lg:text-2xl mb-4'>{animeData.title_english}</h1>
                  {!animeData.title && (
                    <div className='flex flex-col gap-4'>
                      <div className="h-5 w-1/2 bg-gray-300 rounded-full "></div>
                      <div className="h-4 w-3/4 bg-gray-300 rounded-full "></div>
                    </div>
                  )}

                  <iframe
                    width="500"
                    height="300"
                    className='w-full h-[375px] rounded-2xl py-4 md:pb-8 '
                    src={animeData.trailer?.embed_url.split('?')[0]}
                    title={`Trailer of ${animeData.title}`}
                    allow="accelerometer; 
                      clipboard-write; 
                      encrypted-media; 
                      gyroscope; 
                      picture-in-picture; 
                      web-share"
                    allowFullScreen
                  ></iframe>

                  <div className="whitespace-pre-line">
                    <h3 className='text-2xl md:text-2xl lg:text-3xl font-bold mb-4'>About</h3>
                    <ReadMore>{animeData.synopsis}</ReadMore>
                  </div>

                  <div className='flex grow flex-wrap gap-4 py-8'>
                    {animeData.genres.map((genre) => (
                      <Link
                        href={`/browse?genres=${genre.mal_id}`}
                        key={genre.mal_id}
                        className='border border-primaryColor bg-primaryColor hover:bg-[#d64f48] hover:border-[#d64f48] text-bgColor rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg py-2 px-6 transition-all'
                      >
                        {genre.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className='flex flex-col'>
                  <div>
                    <div className='md:-mt-[50%] lg:-mt-[42%] xl:-mt-[18%] 2xl:-mt-[18%] '>
                      <h1 className='hidden md:text-bgColor md:[text-shadow:_0_1px_5px_rgb(0_0_0_/_90%)] md:block text-xl md:text-2xl lg:text-3xl font-bold'>{animeData.title}</h1>
                      <h1 className='hidden md:text-bgColor md:[text-shadow:_0_1px_5px_rgb(0_0_0_/_90%)] md:block text-lg md:text-xl lg:text-2xl'>{animeData.title_english}</h1>
                      {!animeData.title && (
                        <div className='flex flex-col gap-4'>
                          <div className="h-5 w-1/2 bg-gray-300 rounded-full "></div>
                          <div className="h-4 w-3/4 bg-gray-300 rounded-full "></div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="py-8 relative whitespace-pre-line">
                    <h3 className='text-2xl md:text-2xl lg:text-3xl font-bold mb-4'>About</h3>
                    {!animeData.trailer && (
                      <div className='flex flex-col gap-4'>
                        <div className="h-4 bg-gray-300 rounded-full "></div>
                        <div className="h-4 bg-gray-300 rounded-full "></div>
                        <div className="h-4 bg-gray-300 rounded-full "></div>
                        <div className="h-4 bg-gray-300 rounded-full "></div>
                      </div>
                    )}
                    <ReadMore>{animeData.synopsis}</ReadMore>

                    <div className='flex grow flex-wrap gap-4 py-8'>
                      {animeData.genres?.map((genre) => (
                        <Link
                          href={`/browse?genres=${genre.mal_id}`}
                          key={genre.mal_id}
                          className='border border-primaryColor bg-primaryColor hover:bg-[#d64f48] hover:border-[#d64f48] text-bgColor rounded-tl-2xl rounded-tr-lg rounded-br-2xl rounded-bl-lg py-2 px-6 transition-all'
                        >
                          {genre.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="relative flex gap-4 pb-4 pt-8">
          {animeInfoRelations
            .filter((infoRelation) => hasRelation(infoRelation.relation))
            .map((infoRelation, index) => (
              <div key={index}
                className=' rounded-xl my-auto  py-3 px-4 bg-[#2e2e2e] border-customGray
                  hover:text-customGray hover:bg-secondaryColor cursor-pointer transition-all'
                onClick={() => handleRelationClick(infoRelation.relation)}>
                <span className=' text-bgColor font-bold '>{infoRelation.relation}</span>
              </div>
            ))}
        </div>

        <div>
          {filteredAnimesRelation.map((anime, index) => (
            <div key={index}>
              <Swiper
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  475: { slidesPerView: 2, spaceBetween: 10 },
                  580: { slidesPerView: 2, spaceBetween: 10 },
                  768: { slidesPerView: 3, spaceBetween: 15 },
                  1024: { slidesPerView: 4, spaceBetween: 20 },
                  1280: { slidesPerView: 5, spaceBetween: 20 },
                  1810: { slidesPerView: 6, spaceBetween: 20 },
                  2360: { slidesPerView: 7, spaceBetween: 20 },
                }}
                scrollbar={{
                  hide: true,
                }}
                modules={[Scrollbar]}
                centeredSlides={false}
                style={{
                  "--swiper-scrollbar-bg-color": "#2A2A2A",
                  "--swiper-scrollbar-drag-bg-color": "#f45a53",
                }}
              >
                {anime.entry.map((info, index) => (
                  <SwiperSlide key={index} className='pt-4 pb-8 flex justify-center'>
                    {info.mal_id && <PictureRelation info={info} />}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>

        <div>
          {animeRecommendations && animeRecommendations.length > 0 && (
            <div className=' py-10'>
              <div className='flex flex-col md:flex-row justify-between pb-4'>
                <h3 className='md:text-xl lg:text-2xl font-bold pb-4'>You Might Like</h3>
                {animeRecommendations.length > slidesPerView && (
                  <div className='flex gap-4 '>
                    <button className='px-8 py-2 rounded-md bg-primaryColor text-bgColor hover:bg-tertiaryColor transition-all' onClick={() => swiperRef.current?.slidePrev()}><ArrowSVG className="fill-bgColor rotate-180 h-4 lg:h-5 " /></button>
                    <button className='px-8 py-2 group rounded-md bg-primaryColor text-bgColor hover:bg-tertiaryColor transition-all' onClick={() => swiperRef.current?.slideNext()}><ArrowSVG className="fill-bgColor h-4 lg:h-5 " /></button>
                  </div>
                )}
              </div>
              <Swiper
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  580: { slidesPerView: 2, spaceBetween: 10 },
                  910: { slidesPerView: 3, spaceBetween: 10 },
                  1235: { slidesPerView: 4, spaceBetween: 10 },
                  1280: { slidesPerView: 4, spaceBetween: 10 },
                  1810: { slidesPerView: 5, spaceBetween: 20 },
                  2360: { slidesPerView: 6, spaceBetween: 20 },
                }}

                modules={[Navigation, Pagination]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
              >

                {animeRecommendations.map((anime, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      href={`${anime.entry.mal_id}`}
                      onMouseDown={onLinkMouseDown}>
                      <div className='cursor-grab flex flex-col w-fit '>
                        <Image
                          src={anime.entry.images.webp.large_image_url}
                          alt={anime.entry.title}
                          width={215}
                          height={290}
                          sizes="100vw"
                          className='hover:opacity-80 hover:scale-[1.02] rounded-sm mb-3 w-[215px] h-[290px] transition-all object-cover '
                        />
                        <span className='text-center'>{anime.entry.title}</span>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        {!animeData && (<NotFound />)}

      </Wrapper>
    </div>
  )
}

export default Page