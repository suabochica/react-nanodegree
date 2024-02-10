import React from 'react';

function UserFavoriteMovieList(props) {
  return (
    <ul>
      {props.profiles.map((profile) => {
        const userName = props.users[profile.userID].name;
        const favoriteMovieName = props.movies[profile.favoriteMovieID].name;

        return (
          <li key={profile.id}>
            <p>{`${userName} favorite movie is ${favoriteMovieName}`}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default UserFavoriteMovieList;