"use client"
import { useContext, useEffect } from 'react';
import Wrapper from '../Wrapper/Wrapper'
import Carousel from './Carousel/Carousel';
import BroadcastAnime from './BroadcastAnime';
import HeroText from './HeroText';
import { useInView } from 'react-intersection-observer';
import { FetchDataContext } from '@/app/context/FetchDataContext';

function Hero() {
  const {
    seasonAnime,
    popularAiringAnime,
    upcomingAnime,
    mostFavoriteAnime,
    fetchSeasonAnime,
    fetchPopularAiringAnime,
    fetchUpcomingAnime,
    fetchMostFavoriteAnime,
    seasonLoaded, 
    popularLoaded, 
    upcomingLoaded, 
    favoriteLoaded
  } = useContext(FetchDataContext)

  // Intersection Observer hooks for tracking scroll position
  const { ref: seasonRef, inView: seasonInView } = useInView({ initialInView: true });
  const { ref: popularRef, inView: popularInView } = useInView();
  const { ref: upcomingRef, inView: upcomingInView } = useInView();
  const { ref: favoriteRef, inView: favoriteInView } = useInView();

  // Function to fetch data based on scroll position and state
  useEffect(() => {
    if (seasonInView) {
      fetchSeasonAnime();
    }
    if (popularInView) {
      fetchPopularAiringAnime();
    }
    if (upcomingInView) {
      fetchUpcomingAnime();
    }
    if (favoriteInView) {
      fetchMostFavoriteAnime();
    }
  }, [seasonInView, popularInView, upcomingInView, favoriteInView, seasonLoaded, popularLoaded, upcomingLoaded, favoriteLoaded]);

  return (
    <div className='h-full w-full'>
      <Wrapper>
        <HeroText />
        <div ref={seasonRef}>
          <Carousel slides={seasonAnime} title="currently airing" href="status=airing&type=tv&orderBy=popularity&sortBy=asc" />
        </div>
        <div ref={popularRef}>
          <Carousel slides={popularAiringAnime} title="top airing" href="status=airing&type=tv&orderBy=score" />
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