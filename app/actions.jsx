'use server'

const baseURL = 'https://api.jikan.moe/v4';

export const GetTopAnime = async (filter, page = 1) => {
    const response = await fetch(`${baseURL}/top/anime?filter=${filter}&limit=15&type=tv&page=${page}`, { cache: "no-store" });

    if (!response.ok) {
        const errorData = await response.json(); // Try parsing error data
        const errorMessage = errorData?.error?.message || 'Unknown error'; // Extract error message

        if (response.status === 400) {
            throw new Error(`Bad Request: ${errorMessage}`); // Handle 400 Bad Request
        } else if (response.status === 404) {
            throw new Error('Not Found'); // Handle 404 Not Found
        } else if (response.status === 405) {
            throw new Error('Method Not Allowed'); // Handle 405 Method Not Allowed
        } else if (response.status === 429) {
            throw new Error('Too Many Requests'); // Handle 429 Too Many Requests
        } else {
            throw new Error(`API Error: ${errorMessage}`); // Generic error for other cases
        }
    }

    const data = await response.json();
    return data;
};

export const GetAnimeSearch = async (search = "", OrderBy = "", status = "", type = "", sortBy = "", genre = '', page = 1,) => {
    try {
        const response = await fetch(`${baseURL}/anime?q=${search}&sfw=true&limit=15&order_by=${OrderBy}&status=${status}&type=${type}&sort=${sortBy}&genres=${genre}&genres_exclude=49,12&page=${page}`, { cache: "no-store" });
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
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching anime by ID:', error);
    }
};

export const GetAnimeRelations = async (id) => {
    try {
        const response = await fetch(`${baseURL}/anime/${id}/relations`);
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
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching schedules:', error);
        throw error;
    }
};