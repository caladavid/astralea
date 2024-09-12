'use server'

const baseURL = 'https://api.jikan.moe/v4';

const handleAPIError = async (response) => {
    let errorMessage = 'An unknown error occurred';

    try {
        const errorData = await response.json();
        errorMessage = errorData?.error?.message || errorMessage;
    } catch (e) {
        console.warn('Error parsing error response:', e); // Si el parsing del error falla
    }

    switch (response.status) {
        case 400:
            throw new Error(`Bad Request: ${errorMessage}`);
        case 404:
            throw new Error('Not Found');
        case 405:
            throw new Error('Method Not Allowed');
        case 429:
            throw new Error('Too Many Requests - You have hit the rate limit');
        default:
            throw new Error(`API Error: ${errorMessage}`);
    }
};

export const GetTopAnime = async (filter, page = 1) => {
    const response = await fetch(`${baseURL}/top/anime?filter=${filter}&limit=15&type=tv&page=${page}`, { cache: "no-store" });

    if (!response.ok) {
        await handleAPIError(response);
    }

    const data = await response.json();
    return data;
};

export const GetAnimeSearch = async (search = "", OrderBy = "", status = "", type = "", sortBy = "", genre = '', page = 1,) => {
    try {
        const response = await fetch(`${baseURL}/anime?q=${search}&sfw=true&limit=15&order_by=${OrderBy}&status=${status}&type=${type}&sort=${sortBy}&genres=${genre}&genres_exclude=49,12&page=${page}`, { cache: "no-store" });

        if (!response.ok) {
            await handleAPIError(response);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching anime search data:', error);
        throw error;
    }
};


export const GetSeasonAnime = async (page = 1) => {
    try {
        const response = await fetch(`${baseURL}/seasons/now?filter=tv&limit=15&page=${page}`, { cache: "no-store" });

        if (!response.ok) {
            await handleAPIError(response);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching season anime:', error);
        throw error;
    }
};


export const GetAnimeFullById = async (id) => {
    try {
        const response = await fetch(`${baseURL}/anime/${id}/full`);

        if (!response.ok) {
            await handleAPIError(response);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching anime by ID:', error);
    }
};

export const GetAnimeRelations = async (id) => {
    try {
        const response = await fetch(`${baseURL}/anime/${id}/relations`);

        if (!response.ok) {
            await handleAPIError(response);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching anime relations:', error);
        throw error;
    }
};

export const GetAnimeRecommendations = async (id) => {
    try {
        const response = await fetch(`${baseURL}/anime/${id}/recommendations`);

        if (!response.ok) {
            await handleAPIError(response);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching anime recommendations:', error);
        throw error;
    }
};

export const GetGenres = async () => {
    try {
        const response = await fetch(`${baseURL}/genres/anime`);

        if (!response.ok) {
            await handleAPIError(response);
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching anime genres:', error);
        throw error;
    }
};

export const GetUpcomingAnime = async (page = 1) => {
    try {
        const response = await fetch(`${baseURL}/seasons/upcoming?limit=15&filter=tv&page=${page}`);

        if (!response.ok) {
            await handleAPIError(response);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching upcoming anime:', error);
        throw error;
    }
};

export const GetTopMovies = async (page = 1) => {
    try {
        const response = await fetch(`${baseURL}/top/anime?filter=favorite&limit=15&type=movie&limit=15&page=${page}`);

        if (!response.ok) {
            await handleAPIError(response);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching top movies:', error);
        throw error;
    }
};

export const GetSchedules = async (filter = "") => {
    try {
        const response = await fetch(`${baseURL}/schedules?unapproved&sfw=true&filter=${filter}`, { cache: "no-store" });

        if (!response.ok) {
            await handleAPIError(response);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching schedules:', error);
        throw error;
    }
};