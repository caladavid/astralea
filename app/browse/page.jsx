"use client"
import { GetAnimeSearch, GetGenres } from '@/app/actions';
import React, { useEffect, useState } from 'react'
import Wrapper from '../components/Wrapper/Wrapper'
import AnimeCard from '../components/Home/AnimeCard';
import { useRouter, useSearchParams } from 'next/navigation';
import SelectCard from './SelectCard';
import AnimeCardSkeleton from '../components/Skeletons/AnimeCardSkeleton';
import SpinnerSVG from '@/public/assets/svgs/SpinnerSVG';
import { useInView } from 'react-intersection-observer';

const Page = () => {
    const [animeData, setAnimeData] = useState([]);
    const [genreData, setGenreData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const { ref, inView } = useInView();
    const searchParams = useSearchParams();
    const searchURL = searchParams.get('q');
    const orderByURL = searchParams.get('orderBy');
    const statusURL = searchParams.get('status');
    const typeURL = searchParams.get('type');
    const sortByURL = searchParams.get('sortBy');
    const genreURL = searchParams.get('genres');

    const router = useRouter();

    // UI Text Description
    const typeOptions = [
        "tv",
        "movie",
        "ova",
        "special",
        "ona",
        "tv_special"
    ];

    const statusOptions = [
        "airing",
        "complete",
        "upcoming",
    ];

    const orderByOptions = [
        "score",
        "popularity",
        "favorites"
    ];

    // State for search filters
    const [filters, setFilters] = useState({
        orderBy: orderByURL || 'score',
        status: statusURL || '',
        type: typeURL || '',
        sortBy: sortByURL || 'desc',
        genres: genreURL || '',
    });

    // Effect to fetch initial data and refresh when filters change
    useEffect(() => {
        fetchData();
    }, [searchURL, orderByURL, statusURL, typeURL, genreURL, filters]);

    // Function to fetch anime data
    const fetchData = async () => {
        try {
            // Verifica si hay un término de búsqueda válido antes de llamar a GetAnimeSearch
            setCurrentPage(1);
            const animeDataResponse = await GetAnimeSearch(
                searchURL || '',
                orderByURL || filters.orderBy,
                statusURL || filters.status,
                typeURL || filters.type,
                filters.sortBy,
                genreURL || filters.genres,
            );

            const genresResponse = await GetGenres();
            const filteredGenres = genresResponse.filter(genre => genre.name !== "Hentai" && genre.name !== "Erotica")

            setGenreData(filteredGenres);
            setAnimeData(animeDataResponse.data);
            setIsLoading(false)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Functions to handle filter changes
    const handleSelectedStatusChange = (e) => {
        // Get the selected status value from the event
        const selectedStatus = e.target.value === "All" ? "" : e.target.value;
        // Create new filters object with updated status
        const params = { ...filters, status: selectedStatus };
        // Set the updated filters state
        setFilters((prevFilters) => ({
            ...prevFilters,
            status: selectedStatus === "all" ? undefined : selectedStatus
        }));
        // Update URL with new filters
        updateURL(params);
        // Reset current page to 1 when filters change
        setCurrentPage(1);
    };

    const handleTypeChange = (e) => {
        const selectedType = e.target.value === "All" ? "" : e.target.value;
        const params = { ...filters, type: selectedType };
        setFilters((prevFilters) => ({
            ...prevFilters,
            type: selectedType === "all" ? undefined : selectedType
        }));
        updateURL(params);
        setCurrentPage(1);
    };

    const handleOrderByChange = (e) => {
        const selectedOrderBy = e.target.value;
        const params = { ...filters, orderBy: selectedOrderBy };
        setFilters((prevFilters) => ({
            ...prevFilters,
            orderBy: selectedOrderBy
        }));
        updateURL(params);
        setCurrentPage(1);
    };

    const handleSortByChange = (e) => {
        const sortBy = e.target.value;
        const params = { ...filters, sortBy };
        setFilters({ ...filters, sortBy });
        updateURL(params);
        setCurrentPage(1);
    };

    const handleGenreChange = (e) => {
        const selectedGenre = e.target.value === "All" ? "" : e.target.value;
        const params = { ...filters, genres: selectedGenre };
        setFilters((prevFilters) => ({
            ...prevFilters,
            genres: selectedGenre === "all" ? undefined : selectedGenre
        }));
        updateURL(params);
        setCurrentPage(1);
    };

    // Function to update URL with new filters
    const updateURL = (params) => {
        const query = { ...router.query, ...params };

        // Keep search value in URL if exists
        if (searchURL) {
            query.q = searchURL;
        }


        // Remove status parameter if set to "all"
        Object.keys(query).forEach((key) => {
            if (query[key] === "all" || query[key] === undefined || query[key] === '') {
                delete query[key];
            }
        });

        const newUrl = query ? `?${new URLSearchParams(query).toString()}` : '';
        router.push(newUrl);
    };

    // Function to load more data when spinner reached
    const loadMoreData = async () => {
        // Calculate the next page number
        const nextPage = currentPage + 1;

        try {
            // Fetch new anime data for the next page
            const newAnime = await GetAnimeSearch(
                searchURL || '',
                orderByURL || filters.orderBy,
                statusURL || filters.status,
                typeURL || filters.type,
                filters.sortBy,
                genreURL || filters.genres,
                nextPage,
            );

            // Check if there are new anime results
            if (newAnime.data.length === 0) {
                // If no new results, set isLastPage to true
                setIsLastPage(true);
            } else {
                // If there are new results, append them to the existing anime data
                setAnimeData((prevData) => [...prevData, ...newAnime.data]);
                // Update the current page number
                setCurrentPage(nextPage);
            }
        } catch (error) {
            // Handle error if data fetching fails
            console.error("Error loading more data:", error);
        }
    };

    // Effect to load more data when spinner reached
    useEffect(() => {
        if (inView && !isLastPage) {
            loadMoreData();
        }
    }, [inView, isLastPage]);

    return (
        <div className='min-h-screen'>
            <Wrapper>
                {searchURL ? (
                    <h1 className='text-2xl lg:text-3xl xl:text-5xl font-bold  py-4 lg:py-6 xl:py-8'>Results found: {searchURL}</h1>
                ) : (
                    <h1 className='text-2xl lg:text-3xl xl:text-6xl font-bold capitalize text-center py-4 lg:py-6 xl:py-8'>Browse</h1>
                )}

                <div className='flex flex-col md:flex-row justify-between md:items-center md:text-2xl'>
                    <h3>Filters</h3>
                    <div className='flex grow md:items-center w-full md:w-1/4'>
                        <h2 className='w-full md:text-end '>Sort By:</h2>
                        <select className="w-fit capitalize px-2 bg-transparent outline-none border-customGray rounded-lg" value={filters.sortBy} onChange={handleSortByChange}>
                            <option value="desc" className='text-lg'>Descending</option>
                            <option value="asc" className='text-lg'>Ascending </option>
                        </select>
                    </div>
                </div>
                <hr className='border-customGray my-6' />
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='w-full lg:w-1/4'>
                        <SelectCard
                            title="Status"
                            value={filters.status}
                            onChange={handleSelectedStatusChange}
                            options={statusOptions}
                            isAll={true}
                        />
                        <SelectCard
                            title="Format"
                            value={filters.type}
                            onChange={handleTypeChange}
                            options={typeOptions}
                            isAll={true}
                        />
                        <div className="mb-3 ">
                            <h2 className='font-bold mb-1 text-sm md:text-lg'>Genres</h2>
                            <select className="w-full text-base capitalize py-4 px-2 bg-transparent border border-customGray rounded-lg" aria-label="Genres" value={filters.genres} onChange={handleGenreChange}>
                                <option value="all">All</option>
                                {genreData.map(genre => (
                                    <option key={genre.mal_id} value={genre.mal_id}>{genre.name}</option>
                                ))}
                            </select>
                        </div>
                        <SelectCard
                            title="Order By"
                            value={filters.orderBy}
                            onChange={handleOrderByChange}
                            options={orderByOptions}
                            isAll={false}
                        />
                    </div>
                    <div className={`${isLoading ? "ml-5" : ""} w-full grid grid-cols-1 sm:grid-cols-2 min-[1130px]:grid-cols-3 min-[1470px]:grid-cols-4 min-[1536px]:grid-cols-3 min-[1920px]:grid-cols-4 min-[2320px]:grid-cols-5 justify-items-center pb-8`}>
                        {isLoading ? (
                            <AnimeCardSkeleton cards={15} />
                        ) : (
                            <>
                                {animeData && animeData.map((anime, index) => (
                                    <div key={index}>
                                        <AnimeCard anime={anime} />
                                    </div>
                                ))}
                            </>
                        )}

                        {!isLoading && animeData.length === 0 && (
                            <div className='row-span-full col-span-full place-self-center text-center'>
                                <h5 className='font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2'>No results found</h5>
                                <p className='md:text-lg'>Try adjusting your search or filter to find what you&apos;re looking for.</p>
                            </div>
                        )}

                        {!isLoading && !isLastPage && (
                            <div className='col-span-1 sm:col-span-2 min-[1130px]:col-span-3 min-[1470px]:col-span-4 min-[1536px]:col-span-3 min-[1920px]:col-span-4 min-[2320px]:col-span-5 py-10' ref={ref}>
                                <SpinnerSVG />
                            </div>
                        )}
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Page