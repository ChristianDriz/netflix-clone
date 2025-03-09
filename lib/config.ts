
// Define a type for the movie/tv show item in the results
type TrendingItem = {
    title?: string;
    name?: string;
    media_type: 'movie' | 'tv';
    poster_path: string;
    overview: string;
    backdrop_path: string;
    release_date?: Date;
    first_air_date?: Date;
};


export async function getTrendingItems() {

    const options = {
        method: 'GET', // GET method to fetch the data
        headers: {
            accept: 'application/json', // Accept JSON response
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN} ` 
        }
    };
    
    try {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options);

        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        const data = await response.json(); 
    
        // Filtering the results to only include movies and TV shows (not people)
        return data.results.filter((item: TrendingItem) => 
            item.media_type === 'movie' || item.media_type === 'tv'
        );
    } catch (error) {
        console.log("Error fetching data:", error);
        return []; // Return an empty array if there's an error
    }
}
