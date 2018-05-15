import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieFavoriteByUsers extends Component {
  render() {
    const {users, movies, usersByMovie} = this.props;
    const movieCards = Object.keys(movies).map((movieId) => (
      <MovieCard
        key={movieId}
        users = {users}
        usersWhoLikedMovie={usersByMovie[movieId]}
        movieInfo={movies[movieId]}
      />
    ))

    return (
      <ul>
        {movieCards}
      </ul>
    )
  }
}

export default MovieFavoriteByUsers;