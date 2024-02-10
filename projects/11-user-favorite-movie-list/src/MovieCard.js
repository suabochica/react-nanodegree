import React from 'react';
import UserList from './UserList';

function MovieCard(props) {
  const { users, usersWhoLikedMovie, movieInfo } = props;

  return (
    <li key={movieInfo.id}>
      <h2>{movieInfo.name}</h2>
      <h3>Liked By:</h3>
      <UserList
        users={users}
        usersWhoLikedMovie={usersWhoLikedMovie}
      />
    </li>
  )
}

export default MovieCard;