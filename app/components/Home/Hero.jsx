"use client"
import { useEffect, useState } from 'react';
import Wrapper from '../Wrapper/Wrapper'
import { GetSeasonAnime, GetTopAnime, GetUpcomingAnime } from '@/app/actions';
import Carousel from './Carousel/Carousel';
import BroadcastAnime from './BroadcastAnime';
import HeroText from './HeroText';
import { useInView } from 'react-intersection-observer';


function Hero() {
  const [seasonAnime, setSeasonAnime] = useState([]);
  const [popularAiringAnime, setPopularAiringAnime] = useState([]);
  const [mostFavoriteAnime, setMostFavoriteAnime] = useState([]);
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [seasonLoaded, setSeasonLoaded] = useState(false);
  const [popularLoaded, setPopularLoaded] = useState(false);
  const [favoriteLoaded, setFavoriteLoaded] = useState(false);
  const [upcomingLoaded, setUpcomingLoaded] = useState(false);

  // Intersection Observer hooks for tracking scroll position
  const { ref: seasonRef, inView: seasonInView } = useInView({ initialInView: true });
  const { ref: popularRef, inView: popularInView } = useInView();
  const { ref: upcomingRef, inView: upcomingInView } = useInView();
  const { ref: favoriteRef, inView: favoriteInView } = useInView();

   // Function to fetch data based on scroll position and state
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (seasonInView && !seasonLoaded) {
          const seasonData = await GetSeasonAnime();
          setSeasonAnime(seasonData.data);
          setSeasonLoaded(true);
        } else if (popularInView && !popularLoaded) {
          const popularData = await GetTopAnime("airing");
          setPopularAiringAnime(popularData.data);
          setPopularLoaded(true);
        } else if (upcomingInView && !upcomingLoaded) {
          const upcomingData = await GetUpcomingAnime();
          setUpcomingAnime(upcomingData.data);
          setUpcomingLoaded(true);
        } else if (favoriteInView && !favoriteLoaded) {
          const mostFavoriteData = await GetTopAnime("bypopularity");
          setMostFavoriteAnime(mostFavoriteData.data);
          setFavoriteLoaded(true);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [seasonInView, popularInView, upcomingInView, favoriteInView, seasonLoaded, popularLoaded, upcomingLoaded, favoriteLoaded]);

  return (
    <div className='h-full w-full'>
      <Wrapper>
        <HeroText />
        <div ref={seasonRef}>
          <Carousel slides={seasonAnime} title="currently airing" href="status=airing&type=tv&orderBy=popularity&sortBy=asc"/>
        </div>
        <div ref={popularRef}>
          <Carousel slides={popularAiringAnime}title="top airing" href="status=airing&type=tv&orderBy=score" />
        </div>
        <BroadcastAnime />
        <div ref={upcomingRef}>
          <Carousel slides={upcomingAnime} title="top upcoming" href="status=upcoming&orderBy=favorites" />
        </div>
        <div ref={favoriteRef}>
          <Carousel slides={mostFavoriteAnime} title="most popular" href="orderBy=popularity&sortBy=asc" />
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero