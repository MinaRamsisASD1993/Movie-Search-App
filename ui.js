class UI {
    constructor() {}

    showOutputDivUI(arrOfMovies) {
        const outputUI = document.querySelector('#output .row');
        let output = "";
        arrOfMovies.forEach(movie => {
            
            output +=
                `
                <div class="col-md-4">
                    <div class="wrapper bg-light text-center mt-4 mr-2 p-4 rounded">
                        <img src ="${movie.Poster}" class="mx-auto">
                        <h5 class="my-3">${movie.Title}<h5>
                        <a href="Movie.html" onclick="sessionStorage.setItem('movieID', '${movie.imdbID}');" 
                        class="btn btn-primary">Movie Details</a>
                        
                    </div>
                </div>
                
            `;

        });
        outputUI.innerHTML = output;

    }
    showMovieDivUI(movie) {
        const outputUI = document.querySelector('.movie .row');
        const titleFromSession = sessionStorage.getItem('movieID');
        let output = "";
        output +=
            `
                <div class="col-md-4 mt-2">
                    <img src = "${movie.Poster}" class="mx-auto rounded">
                </div>
                
                <div class="col-md-8">
                    <div class="row">
                        <h2 class="ml-3 mb-3" id="movieTitle">${movie.Title}</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="list-group">
                                <li class="list-group-item">Genre: ${movie.Genre}</li>
                                <li class="list-group-item">Released: ${movie.Released}</li>
                                <li class="list-group-item">Rated: ${movie.Rated}</li>
                                <li class="list-group-item">IMDB Rating: ${movie.imdbRating}</li>
                                <li class="list-group-item">Director: ${movie.Director}</li>
                                <li class="list-group-item">Writer: ${movie.Writer}</li>
                                <li class="list-group-item">Actors: ${movie.Actors}</li>
                            </ul>
                        </div>
                    </div>
                
                </div>
                <div class="row my-5">
                    <div class="col-sm-12 plotSection">
                        <h1>Plot</h1>
                        <p>${movie.Plot}</p>
                    </div>
                    <div class="col-sm-12 mt-4 buttons">
                        <a href="https://www.imdb.com/title/${titleFromSession}/?ref_=fn_al_tt_1" target="_blank"
                         class="btn btn-primary" >View on IMDB</a>
                        <a href="index.html" class="btn btn-secondary" >Back to Search</a>
                    </div>
                </div>
            `;




        outputUI.innerHTML = output;

    }


}