"use client"
import React, { createContext, useCallback, useContext, useState } from 'react'
import { GetAnimeFullById, GetAnimeRecommendations, GetAnimeRelations, GetSeasonAnime, GetTopAnime, GetTopMovies, GetUpcomingAnime } from '@/app/actions';

export const FetchDataContext = createContext();

export const FetchDataProvider = ({ children }) => {
    const [animeData, setAnimeData] = useState([]);
    const [animeRecommendations, setAnimeRecommendations] = useState([]);
    const [animeRelations, setAnimeRelations] = useState([]);
    const [TopMovies, setTopMovies] = useState([]);

    const [seasonAnime, setSeasonAnime] = useState([]);
    const [popularAiringAnime, setPopularAiringAnime] = useState([]);
    const [upcomingAnime, setUpcomingAnime] = useState([]);
    const [mostFavoriteAnime, setMostFavoriteAnime] = useState([]);
    const [seasonLoaded, setSeasonLoaded] = useState(false);
    const [popularLoaded, setPopularLoaded] = useState(false);
    const [upcomingLoaded, setUpcomingLoaded] = useState(false);
    const [favoriteLoaded, setFavoriteLoaded] = useState(false);

    // Función para obtener los datos del anime y almacenarlos en el estado
    const fetchAnimeData = useCallback(async (idFromUrl) => {
        try {
            const [animeDataResponse, animeRecommendationsResponse, animeRelationsResponse] = await Promise.all([
                GetAnimeFullById(idFromUrl),
                GetAnimeRecommendations(idFromUrl),
                GetAnimeRelations(idFromUrl),
            ]);

            const sortedRecommendationsAnime = animeRecommendationsResponse.data?.slice(0, 20) || [];

            setAnimeData(animeDataResponse.data);
            setAnimeRecommendations(sortedRecommendationsAnime);
            setAnimeRelations(animeRelationsResponse.data);
        } catch (error) {
            console.error('Error fetching anime data:', error);
        }
    }, []);

    const fetchTopMovies = useCallback(async () => {
        try {
            const TopMoviesResponse = await GetTopMovies();
            setTopMovies(TopMoviesResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [setTopMovies]); // Evitar que esta función se recree en cada renderizado

    // Funciones de fetch envueltas en useCallback
    const fetchSeasonAnime = useCallback(async () => {
        if (!seasonLoaded) {
            try {
                const seasonData = await GetSeasonAnime();
                setSeasonAnime(seasonData.data);
                setSeasonLoaded(true);
            } catch (error) {
                console.error('Error fetching season anime:', error);
            }
        }
    }, [seasonLoaded]);

    const fetchPopularAiringAnime = useCallback(async () => {
        if (!popularLoaded) {
            try {
                const popularData = await GetTopAnime("airing");
                setPopularAiringAnime(popularData.data);
                setPopularLoaded(true);
            } catch (error) {
                console.error('Error fetching popular airing anime:', error);
            }
        }
    }, [popularLoaded]);

    const fetchUpcomingAnime = useCallback(async () => {
        if (!upcomingLoaded) {
            try {
                const upcomingData = await GetUpcomingAnime();
                setUpcomingAnime(upcomingData.data);
                setUpcomingLoaded(true);
            } catch (error) {
                console.error('Error fetching upcoming anime:', error);
            }
        }
    }, [upcomingLoaded]);

    const fetchMostFavoriteAnime = useCallback(async () => {
        if (!favoriteLoaded) {
            try {
                const mostFavoriteData = await GetTopAnime("bypopularity");
                setMostFavoriteAnime(mostFavoriteData.data);
                setFavoriteLoaded(true);
            } catch (error) {
                console.error('Error fetching most favorite anime:', error);
            }
        }
    }, [favoriteLoaded]);

    return (
        <FetchDataContext.Provider
            value={{
                animeData,
                setAnimeData,
                TopMovies,
                setTopMovies,
                fetchTopMovies,
                animeRecommendations,
                animeRelations,
                fetchAnimeData,
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
            }}
        >
            {children}
        </FetchDataContext.Provider>
    )
}

// Hook para usar el contexto
export const useFetchData = () => useContext(FetchDataContext);