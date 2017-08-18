$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});
// http://www.omdbapi.com/?apikey=ee3d33c2&?s
//http://www.omdbapi.com/?apikey=ee3d33c2&?s
function getMovies(searchText) {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query="' + searchText)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                ouput += `
                    <div class="col-md-3">
                        <div class="well text-center">

                        <h5>${movie.Title}</h5>
                        <a onClick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                    </div>
                `;
            });
            
            $('#movies').html(output);
        })
        .catch((error) => {
            console.log(error);
        })
};