"use client"
import React, { useEffect, useState } from 'react'
import { GetSchedules } from '@/app/actions';
import Wrapper from '@/app/components/Wrapper/Wrapper';
import ScheduleCards from './ScheduleCards';
import ImageSVG from '@/public/assets/svgs/ImageSVG';

const Page = () => {
  const [schedulesInfo, setSchedulesInfo] = useState([]);
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
  const [selectedDay, setSelectedDay] = useState(currentDay);

  // Function to fetch data based on selected day
  const fetchData = async () => {
    try {
      if (selectedDay) {
        const schedulesResponse = await GetSchedules(selectedDay);
        setSchedulesInfo(schedulesResponse.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

   // useEffect to call fetchData whenever selected day changes
  useEffect(() => {
    fetchData();
  }, [selectedDay]);

   // Function to handle click on day button
  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className='min-h-screen'>
      <Wrapper>
        <h1 className='text-2xl md:text-2xl 2xl lg:text-3xl xl:text-5xl text-center font-bold py-10'>Anime schedule</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {daysOfWeek.map(day => (
            <button className={`${day === selectedDay ? "border-secondaryColor bg-secondaryColor text-bgColor hover:bg-tertiaryColor hover:border-tertiaryColor" : "border-customGray hover:bg-tertiaryColor hover:border-tertiaryColor"} border rounded-md px-6 py-2 transition-colors capitalize`} key={day} onClick={() => handleDayClick(day)}>
              {day}
            </button>
          ))}
        </div>
        <div className='py-10'>
          <h2 className='text-2xl md:text-2xl 2xl lg:text-3xl xl:text-4xl font-bold pb-4 capitalize'>{selectedDay}</h2>
          {schedulesInfo.length > 0 ? (
            <ScheduleCards day={selectedDay} schedulesInfo={schedulesInfo} />
          ) : (
            <>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className='relative pl-6 flex gap-6 border-t border-gray-400 pt-10'>
                  <div className="w-[10%] h-3 bg-gray-300 rounded-full "></div>
                  <div className=" rounded-md min-w-[288px] h-[200px] lg:h-[160px]  mb-4 flex justify-center items-center bg-gray-300 animate-pulse ">
                    <ImageSVG />
                  </div>
                  <div className='w-full flex flex-col justify-between'>
                    <div className='flex flex-col gap-3'>
                      <div className="w-2/4 h-4 bg-gray-300 rounded-full "></div>
                      <div className="w-full h-3 bg-gray-300 rounded-full "></div>
                      <div className="w-full h-3 bg-gray-300 rounded-full "></div>
                    </div>
                    <div className='flex gap-4 mb-4'>
                      <div className="w-1/4 h-3 bg-gray-300 rounded-full "></div>
                      <div className="w-1/4 h-3 bg-gray-300 rounded-full "></div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

        </div>
      </Wrapper>
    </div>
  )
}

export default Page