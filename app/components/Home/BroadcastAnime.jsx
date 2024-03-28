"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { GetSchedules } from '@/app/actions';
import { useInView } from 'react-intersection-observer';
import ArrowSVG from '@/public/assets/svgs/ArrowSVG';
import SpinnerSVG from '@/public/assets/svgs/SpinnerSVG';

const BroadcastAnime = () => {
  const [schedulesInfo, setSchedulesInfo] = useState([]);
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]
  const currentDay = daysOfWeek[new Date().getDay()];
  const { ref, inView } = useInView({ threshold: 1 });

  // Function to fetch data based on the current view
  const fetchData = async () => {
    try {
      if (inView) {
        const selectedDay = currentDay;
        const schedulesResponse = await GetSchedules(selectedDay); // Assuming GetSchedules function fetches data for the selected day
        setSchedulesInfo(schedulesResponse.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   // UseEffect to call fetchData whenever the view changes
  useEffect(() => {
    fetchData();
  }, [inView]);

   // Function to toggle visibility of schedule
  const handleToggleSchedule = () => {
    setIsScheduleVisible(!isScheduleVisible);
  };

  return (
    <div ref={ref} className='py-10 '>
      <h2 className='text-center py-6 font-bold text-3xl'>Today&apos;s  Schedule</h2>
      <div className='bg-customGray py-2 px-8 rounded-2xl text-bgColor'>
        <div className='flex justify-between gap-4 overflow-x-auto cursor-pointer items-center ' onClick={handleToggleSchedule}>
          <h3 className='text-lg md:text-xl lg:text-2xl  font-bold p-4 capitalize'>{currentDay}</h3>
          <ArrowSVG className={`${isScheduleVisible ? "-rotate-90" : "rotate-90"} h-6 lg:h-8 fill-bgColor `} />
        </div>
        {isScheduleVisible && (
          <div className='flex flex-col-reverse py-4 transition-all overflow-hidden '>
            {schedulesInfo.length > 0 ? (
              schedulesInfo.map(anime => (
                <Link key={anime.mal_id}
                  href={`/anime/${anime.mal_id}`}
                  className='flex flex-col md:flex-row border-b border-gray-400 py-5 gap-5 group '
                >
                  <time className='w-[10%] lg:text-end '>{anime.broadcast.time}</time>
                  <div className='w-full flex flex-col'>
                    <h2 className='lg:text-xl font-bold mb-2 group-hover:text-secondaryColor transition-colors'>{anime.title}</h2>
                    <p className='text-sm md:text-base overflow-hidden text-ellipsis line-clamp-2 max-h-[4rem]'>{anime.synopsis}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className='mx-auto'>
                <SpinnerSVG />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default BroadcastAnime