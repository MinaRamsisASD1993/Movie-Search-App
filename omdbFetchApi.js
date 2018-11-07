class OmdbApi {
    constructor() {}

    async grabData(movieTitle) {
        const response = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&apikey=f41e5303`);
        const resInJson = await response.json();
        // console.log(resInJson);
        return resInJson;
    }

    async grabMovieDataUsingId(movieID){
        const response = await fetch(`http://www.omdbapi.com/?i=${movieID}&apikey=f41e5303`);
        const resInJson = await response.json();
        return resInJson;
    }
}