$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});
function getMovies(searchText){
    //make request to api using axios
    // Make a request for a user with a given ID
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=66d439f89eb6b3adc621e575fefa1ed8&language=en-US&query=' + searchText)
      .then(function (response) {
          console.log(response);
        let movies = response.data.results;
        let output = '';

        $.each(movies, (index, movie) => {
          output+=`
            <div class="col-md-3">
              <div class="well text-center">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
              <h6>${movie.release_date}</h6>
                <h5>${movie.title}</h5>
                <small>${movie.vote_average}</small>
                </br>
                <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
              </div>
            </div>
          `;
        });
        $('#movies').html(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function movieSelected(id) {
      sessionStorage.setItem('movieId', id);
      window.location = 'movie.html';
      return false;
  }

  function getMovie() {
      let movieId = sessionStorage.getItem('movieId');

      axios.get('https://api.themoviedb.org/3/search/movie?api_key=66d439f89eb6b3adc621e575fefa1ed8&language=en-US&query=' + searchText)
      .then(function (response) {
          console.log(response);
        let movies = response.data.results;
        let output = '';

        $.each(movies, (index, movie) => {
          output+=`
            <div class="col-md-3">
              <div class="well text-center">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
              <h6>${movie.release_date}</h6>
                <h5>${movie.title}</h5>
                <small>${movie.vote_average}</small>
                </br>
                <a onclick="movieSelected('${movie.id}')" class="btn btn-primary" href="#">Movie Details</a>
              </div>
            </div>
          `;
        });
        $('#movies').html(output);
      })
      .catch(function (error) {
        console.log(error);
      });
  }