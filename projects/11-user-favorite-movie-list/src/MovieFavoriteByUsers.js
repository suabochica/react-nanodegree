import React from 'react';
import MovieCard from './MovieCard';

function MovieFavoriteByUsers(props) {
  const { users, movies, usersByMovie } = props;
  const movieCards = Object.keys(movies).map((movieId) => (
    <MovieCard
      key={movieId}
      users={users}
      usersWhoLikedMovie={usersByMovie[movieId]}
      movieInfo={movies[movieId]}
    />
  ))

  return(
    <ul>
        {movieCards}
      </ul>
  )
}

export default MovieFavoriteByUsers;